import os
import cv2
import pytesseract
import spacy
import psycopg2
from psycopg2 import sql

# Load the NLP model
nlp = spacy.load("en_core_web_sm")

# Database connection parameters
DB_HOST = os.getenv("DB_HOST", "localhost")
DB_NAME = os.getenv("DB_NAME", "fra_db")
DB_USER = os.getenv("DB_USER", "user")
DB_PASS = os.getenv("DB_PASS", "password")

def extract_text_from_image(image_path):
    """Extract text from an image using Tesseract OCR."""
    image = cv2.imread(image_path)
    gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    text = pytesseract.image_to_string(gray_image)
    return text

def extract_entities(text):
    """Extract relevant entities from the text using NLP."""
    doc = nlp(text)
    entities = {
        "claimant_name": None,
        "village": None,
        "district": None,
        "state": None,
        "claim_type": None,
        "claim_status": None,
        "area": None
    }
    
    for ent in doc.ents:
        if ent.label_ == "PERSON":
            entities["claimant_name"] = ent.text
        elif ent.label_ == "GPE":
            if not entities["village"]:
                entities["village"] = ent.text
            elif not entities["district"]:
                entities["district"] = ent.text
            elif not entities["state"]:
                entities["state"] = ent.text
        elif "hectare" in ent.text.lower():
            entities["area"] = ent.text

    # Additional logic to determine claim type and status can be added here
    return entities

def store_claim_in_db(entities):
    """Store the extracted entities in the PostgreSQL database."""
    conn = psycopg2.connect(host=DB_HOST, database=DB_NAME, user=DB_USER, password=DB_PASS)
    cursor = conn.cursor()
    
    insert_query = sql.SQL("""
        INSERT INTO fra_claims (claimant_name, village, district, state, claim_type, claim_status, area)
        VALUES (%s, %s, %s, %s, %s, %s, %s)
    """)
    
    cursor.execute(insert_query, (
        entities["claimant_name"],
        entities["village"],
        entities["district"],
        entities["state"],
        entities["claim_type"],
        entities["claim_status"],
        entities["area"]
    ))
    
    conn.commit()
    cursor.close()
    conn.close()

def process_fra_document(image_path):
    """Process the FRA document to extract and store data."""
    text = extract_text_from_image(image_path)
    entities = extract_entities(text)
    store_claim_in_db(entities)

# Example usage
if __name__ == "__main__":
    process_fra_document("path_to_fra_document_image.jpg")