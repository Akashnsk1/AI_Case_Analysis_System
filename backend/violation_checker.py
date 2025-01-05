import json

# Load Law Mapping
with open('data/law_mapping.json', 'r') as file:
    ipc_rules = json.load(file)

# Check Violations in FIR
def check_violations(text):
    violations = []
    for section, details in ipc_rules.items():
        for keyword in details['keywords']:
            if keyword.lower() in text.lower():
                violations.append({
                    'section': section,
                    'description': details['description']
                })
    return violations
