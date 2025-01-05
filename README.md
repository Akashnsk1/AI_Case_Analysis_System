# **AI Case Analysis System**

## **Project Overview**
The **AI Case Analysis System** is a web-based tool designed to analyze FIR (First Information Report) documents. It:
- **Simplifies the FIR content** to make it easier to understand.
- **Identifies Indian laws and sections** violated based on FIR content.
- Provides an **interactive user interface** for input and output.
- Does **not require external databases or APIs**—all legal data is self-contained.

---

## **Folder Structure**
```
AI_Case_Analysis_System/
├── backend/
│   ├── app.py                      # Flask backend for API
│   ├── fir_analysis.py             # FIR analysis and simplification
│   ├── violation_checker.py        # Law violation detection
│   ├── requirements.txt            # Dependencies
│   ├── static/                     # Static assets for UI
│   │   ├── style.css               # CSS for styling
│   │   ├── script.js               # JavaScript for UI logic
│   │   └── logo.png                # Optional logo image
├── frontend/
│   ├── index.html                  # Web interface
├── data/
│   ├── law_mapping.json            # Indian laws and keywords
├── README.md                       # Documentation
└── .gitignore                      # Ignore unnecessary files
```

---

## **Installation and Setup**
### **1. Clone the Repository**
```bash
git clone <repository_url>
cd AI_Case_Analysis_System
```

### **2. Create Virtual Environment**
```bash
python -m venv myenv
source myenv/bin/activate     # Linux/MacOS
myenv\Scripts\activate        # Windows
```

### **3. Install Dependencies**
```bash
pip install -r backend/requirements.txt
```

---

## **Running the Project**
### **1. Start Flask Server**
```bash
python backend/app.py
```

### **2. Open Browser**
Go to:
```
http://127.0.0.1:5000/
```

---

## **How to Use the Application**
1. Enter the FIR text into the provided text area.
2. Click the **Analyze** button.
3. View the output:
   - **Simplified FIR content**.
   - **Key details** (dates, locations, persons involved).
   - **Violations** listed with IPC sections and descriptions.

---

## **Key Features**
- **Simplification**: FIR content is cleaned and summarized.
- **Violation Detection**: Indian laws and IPC sections are matched using keywords.
- **Self-Contained Legal Data**: No external databases or APIs are used.
- **Interactive Interface**: Easy-to-use web UI with responsive design.

---

## **Sample Data for Testing**
### Input FIR:
```
On 12th April 2024, in Bangalore, a robbery took place where the accused used a knife to threaten the victim and stole cash.
```

### Output:
```
Simplified FIR: robbery took place knife threaten victim stole cash
Key Details:
Dates: 12th April 2024
Locations: Bangalore
Persons: None
Violations:
- IPC 378: Theft - Taking property dishonestly without consent.
- IPC 392: Robbery - Taking property by force or causing fear of injury.
- IPC 324: Voluntarily causing hurt by dangerous weapons or means.
```

---

## **Troubleshooting**
### **404 Not Found Error**
- Verify file paths in **`index.html`** for CSS and JS:
```html
<link rel="stylesheet" href="/static/style.css">
<script src="/static/script.js"></script>
```
- Restart Flask Server:
```bash
python backend/app.py
```

### **Model Error (spaCy Model Not Found)**
```bash
python -m spacy download en_core_web_sm
```

---

## **Additional Information**
### **Dependencies**
- Flask
- spaCy
- nltk

### **Authors**
- **Akash**

### **License**
This project is licensed under the **MIT License**.

