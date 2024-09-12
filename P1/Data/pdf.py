from docx import Document
from PIL import Image, ImageDraw, ImageFont
import pandas as pd
import os

def extract_text_from_docx(docx_path):
    document = Document(docx_path)
    text = []
    for para in document.paragraphs:
        text.append(para.text)
    return '\n'.join(text)

def text_to_image(text, image_path, font_path='arial.ttf', font_size=20):
    # Create an image with white background
    image = Image.new('RGB', (800, 600), color='white')
    draw = ImageDraw.Draw(image)
    font = ImageFont.truetype(font_path, font_size)
    
    # Draw the text on the image
    draw.text((10, 10), text, fill='black', font=font)
    
    # Save the image
    image.save(image_path)

def split_questions(text):
    # Split text based on 'Q.' and keep the split parts
    questions = text.split('Q.')
    questions = [f'Q.{q.strip()}' for q in questions if q.strip()]
    return questions

def create_dataframe_from_images(image_paths):
    # Get the absolute paths for images
    absolute_paths = [os.path.abspath(path) for path in image_paths]
    data = [{'Question Image': path} for path in absolute_paths]
    df = pd.DataFrame(data)
    return df

# Path to the Word document
docx_path = r"C:\Users\LENOVO\Downloads\papper.docx"

# Directory for saving images
image_dir = 'images'
os.makedirs(image_dir, exist_ok=True)

# Extract text from the document
text = extract_text_from_docx(docx_path)

# Split text into questions
questions = split_questions(text)

# Generate and save images
image_paths = []
for i, question in enumerate(questions):
    image_path = os.path.join(image_dir, f'question_{i + 1}.png')
    text_to_image(question, image_path)
    image_paths.append(image_path)

# Create DataFrame with absolute paths
df = create_dataframe_from_images(image_paths)

# Save DataFrame to CSV
csv_path = 'questions_images.csv'
df.to_csv(csv_path, index=False)

print(f"DataFrame saved to {csv_path}")
