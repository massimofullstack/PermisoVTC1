import pdfplumber
import json

def extract_text_from_pdf(pdf_path):
    with pdfplumber.open(pdf_path) as pdf:
        text = ''
        for page in pdf.pages:
            text += page.extract_text() + '\n'
        return text

# Extract text from all PDFs
pdfs = ['ejemplo_prueba_i.pdf', 'ejemplo_prueba_ii.pdf', 'ejemplo_prueba_iii.pdf', 'ejemplo_prueba_iv.pdf']
texts = {}

for pdf in pdfs:
    try:
        texts[pdf] = extract_text_from_pdf(pdf)
        print(f'Extracted text from {pdf}: {len(texts[pdf])} characters')
    except Exception as e:
        print(f'Error extracting {pdf}: {e}')
        texts[pdf] = ''

# Save to a JSON file for processing
with open('pdf_texts.json', 'w', encoding='utf-8') as f:
    json.dump(texts, f, ensure_ascii=False, indent=2)

print('Texts saved to pdf_texts.json')