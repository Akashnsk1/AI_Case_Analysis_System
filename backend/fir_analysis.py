import re
import spacy

# Load NLP Model
nlp = spacy.load("en_core_web_sm")

# Preprocess FIR Text
def preprocess_fir(text):
    text = re.sub(r'\W+', ' ', text)  # Remove special characters
    text = re.sub(r'\d+', '', text)   # Remove numbers
    text = text.lower().strip()       # Convert to lowercase and trim spaces
    return text

# Extract Key Details from FIR
def extract_details(text):
    doc = nlp(text)
    details = {
        "dates": [],
        "locations": [],
        "persons": []
    }
    for ent in doc.ents:
        if ent.label_ == "DATE":
            details["dates"].append(ent.text)
        elif ent.label_ == "GPE":
            details["locations"].append(ent.text)
        elif ent.label_ == "PERSON":
            details["persons"].append(ent.text)
    return details
