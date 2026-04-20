import pdfplumber
import re

def extract_questions_from_pdf(pdf_path):
    with pdfplumber.open(pdf_path) as pdf:
        text = ""
        for page in pdf.pages:
            text += page.extract_text() + "\n"

    # Split text into lines
    lines = text.split('\n')

    questions = []
    current_question = None
    options = []
    correct_answer = None
    collecting_options = False

    i = 0
    while i < len(lines):
        line = lines[i].strip()
        if not line:
            i += 1
            continue

        # Check if it's a question (starts with number followed by dot)
        question_match = re.match(r'^(\d+)\.\s*(.+)$', line)
        if question_match:
            # Save previous question if exists
            if current_question and len(options) == 4 and correct_answer is not None:
                questions.append({
                    'question': current_question,
                    'options': options,
                    'correct': correct_answer
                })

            # Start new question
            current_question = question_match.group(2)
            options = []
            correct_answer = None
            collecting_options = True

            # Check if question continues on next lines
            j = i + 1
            while j < len(lines) and not re.match(r'^[A-D]\.', lines[j].strip()):
                next_line = lines[j].strip()
                if next_line and not re.match(r'^\d+\.', next_line) and not re.search(r'Respuesta correcta', next_line):
                    current_question += " " + next_line
                j += 1

            i = j - 1  # Skip the lines we processed
            continue

        # Check if it's an option (A., B., C., D.)
        if collecting_options:
            option_match = re.match(r'^([A-D])\.\s*(.+)$', line)
            if option_match:
                option_text = option_match.group(2)

                # Check if option continues on next lines
                j = i + 1
                while j < len(lines):
                    next_line = lines[j].strip()
                    if next_line and not re.match(r'^[A-D]\.', next_line) and not re.match(r'^\d+\.', next_line) and not re.search(r'Respuesta correcta', next_line):
                        option_text += " " + next_line
                        j += 1
                    else:
                        break

                options.append(option_text)
                i = j - 1

                if len(options) == 4:
                    collecting_options = False
                continue

        # Check for correct answer (Respuesta correcta: X.)
        correct_match = re.search(r'Respuesta correcta:\s*([A-D])\.', line)
        if correct_match:
            correct_letter = correct_match.group(1)
            correct_answer = ord(correct_letter) - ord('A')  # Convert A=0, B=1, C=2, D=3
            continue

        i += 1

    # Add the last question
    if current_question and len(options) == 4 and correct_answer is not None:
        questions.append({
            'question': current_question,
            'options': options,
            'correct': correct_answer
        })

    return questions

# Extract from all PDFs
pdf_files = ['ejemplo_prueba_i.pdf', 'ejemplo_prueba_ii.pdf', 'ejemplo_prueba_iii.pdf']

all_questions = []
for pdf_file in pdf_files:
    try:
        questions = extract_questions_from_pdf(pdf_file)
        all_questions.append(questions)
        print(f"Extracted {len(questions)} questions from {pdf_file}")
    except Exception as e:
        print(f"Error extracting from {pdf_file}: {e}")

# Save to data.js format
with open('data.js', 'w', encoding='utf-8') as f:
    f.write('// Datos de las preguntas extraídos de los PDFs\n\n')
    for i, questions in enumerate(all_questions):
        f.write(f'const questions{i+1} = [\n')
        for q in questions:
            f.write('    {\n')
            f.write(f'        question: "{q["question"].replace(chr(34), chr(92)+chr(34)).replace(chr(10), " ").replace(chr(13), " ")}",\n')
            f.write('        options: [\n')
            for opt in q['options']:
                f.write(f'            "{opt.replace(chr(34), chr(92)+chr(34)).replace(chr(10), " ").replace(chr(13), " ")}",\n')
            f.write('        ],\n')
            f.write(f'        correct: {q["correct"]}\n')
            f.write('    },\n')
        f.write('];\n\n')

    f.write('const allQuestions = [questions1, questions2, questions3];\n')

print("Data saved to data.js")