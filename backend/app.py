from flask import Flask, request, jsonify, send_from_directory
from fir_analysis import preprocess_fir, extract_details
from violation_checker import check_violations
import os

app = Flask(__name__)

# Serve HTML file
@app.route('/')
def home():
    return send_from_directory('../frontend', 'index.html')

# Serve static files
@app.route('/static/<path:filename>')
def static_files(filename):
    return send_from_directory('../backend/static', filename)

# Analyze FIR data
@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.json['text']
    simplified_text = preprocess_fir(data)
    details = extract_details(data)
    violations = check_violations(data)

    response = {
        "simplified_text": simplified_text,
        "details": details,
        "violations": violations
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
