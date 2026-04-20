import json
import re

QUESTION_START = re.compile(r'^(?:Comunidad\s+)?(\d+)\.\s*(.*)$', re.IGNORECASE)
OPTION_START = re.compile(r'^[ 	]*([A-Da-d])(?:[\)\.])\s*(.*)$')
ANSWER_RE = re.compile(r'Respuesta correcta[:\s]*([A-Da-d])', re.IGNORECASE)
HEADER_LINE = re.compile(
    r'^(?:Direcci[oó]n General de Transportes y Movilidad|CONSEJER[IÍ]A DE VIVIENDA, TRANSPORTES E|INFRAESTRUCTURAS|EXAMEN DE APTITUD|M[óo]dulo|MÓDULO|TIPO A|ARRENDAMIENTO CON CONDUCTOR|CON CONDUCTOR|Test ID:|Página|Page|Test ID|Módulo|Tipo A|Referencia:)',
    re.IGNORECASE
)

PDF_FILES = [
    'ejemplo_prueba_i.pdf',
    'ejemplo_prueba_ii.pdf',
    'ejemplo_prueba_iii.pdf',
    'ejemplo_prueba_iv.pdf'
]


def normalize_line_prefix(line):
    line = line.strip()
    if re.match(r'^(?:Comunidad|de Madrid)\s+(?:[A-Da-d][\)\.]|\d+\.)', line):
        return re.sub(r'^(?:Comunidad|de Madrid)\s+', '', line)
    return line


def extraer_preguntas_de_texto(texto, nombre_examen):
    preguntas = []
    current = None
    current_option_idx = None

    for raw_line in texto.splitlines():
        line = normalize_line_prefix(raw_line)
        if not line:
            continue

        question_match = QUESTION_START.match(line)
        if question_match:
            if current and all(current['options']) and current['correct'] is not None:
                preguntas.append(current)
            numero = int(question_match.group(1))
            enunciado = question_match.group(2).strip()
            current = {
                'number': numero,
                'question': enunciado,
                'options': ['', '', '', ''],
                'correct': None
            }
            current_option_idx = None
            continue

        if current is None:
            continue

        respuesta_match = ANSWER_RE.search(line)
        if respuesta_match:
            letra_correcta = respuesta_match.group(1).upper()
            current['correct'] = ord(letra_correcta) - ord('A')
            continue

        option_match = OPTION_START.match(line)
        if option_match and current is not None:
            indice = ord(option_match.group(1).upper()) - ord('A')
            if 0 <= indice < 4:
                current['options'][indice] = option_match.group(2).strip()
                current_option_idx = indice
            continue

        if HEADER_LINE.match(line):
            continue

        if current_option_idx is not None and current['options'][current_option_idx]:
            current['options'][current_option_idx] += ' ' + line.strip()
        else:
            current['question'] += ' ' + line.strip()

    if current and all(current['options']) and current['correct'] is not None:
        preguntas.append(current)

    preguntas_finales = []
    for pregunta in preguntas:
        opciones = [opt.strip() for opt in pregunta['options']]
        if pregunta['question'] and all(opciones) and pregunta['correct'] is not None and 0 <= pregunta['correct'] < 4:
            preguntas_finales.append({
                'number': pregunta['number'],
                'question': pregunta['question'],
                'options': opciones,
                'correct': pregunta['correct']
            })

    return preguntas_finales


if __name__ == '__main__':
    with open('pdf_texts.json', 'r', encoding='utf-8') as f:
        texts = json.load(f)

    all_questions = {}
    for pdf_name in PDF_FILES:
        text = texts.get(pdf_name, '')
        exam_name = pdf_name.replace('ejemplo_prueba_', '').replace('.pdf', '').upper()
        questions = extraer_preguntas_de_texto(text, exam_name)
        all_questions[exam_name] = questions
        missing = [i for i in range(1, 61) if i not in [q_num for q_num in [q.get('number') for q in questions] if q_num is not None]]
        print(f'Prueba {exam_name}: {len(questions)} questions extracted', 'missing' if missing else '', missing)

    data_js_content = '// Datos de las preguntas extraídos de los PDFs\n\n'
    var_names = []
    for index, pdf_name in enumerate(PDF_FILES, start=1):
        exam_name = pdf_name.replace('ejemplo_prueba_', '').replace('.pdf', '').upper()
        var_name = f'questions{index}'
        var_names.append(var_name)
        questions = all_questions.get(exam_name, [])
        data_js_content += f'const {var_name} = [\n'
        for q in questions:
            question_escaped = q['question'].replace('\\', '\\\\').replace('"', '\\"').replace('\\n', ' ')
            options_escaped = [opt.replace('\\', '\\\\').replace('"', '\\"').replace('\\n', ' ') for opt in q['options']]
            data_js_content += (
                '    {\n'
                f'        question: "{question_escaped}",\n'
                '        options: [\n'
                f'            "{options_escaped[0]}",\n'
                f'            "{options_escaped[1]}",\n'
                f'            "{options_escaped[2]}",\n'
                f'            "{options_escaped[3]}"\n'
                '        ],\n'
                f'        correct: {q["correct"]}\n'
                '    },\n'
            )
        data_js_content += '];\n\n'

    data_js_content += f'const allQuestions = [{", ".join(var_names)}];\n'

    with open('data.js', 'w', encoding='utf-8') as f:
        f.write(data_js_content)

    print('data.js updated with all extracted questions')