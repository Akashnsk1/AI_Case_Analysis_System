document.getElementById("analyzeBtn").addEventListener("click", async () => {
    const firText = document.getElementById("firInput").value;

    // Validate input
    if (!firText.trim()) {
        alert("Please enter FIR text before analyzing.");
        return;
    }

    // Send data to backend
    const response = await fetch('/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: firText })
    });

    const data = await response.json();

    // Display results
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h4>Simplified FIR:</h4><p>${data.simplified_text}</p>
        <h4>Key Details:</h4>
        <p>Dates: ${data.details.dates.join(", ") || "None"}</p>
        <p>Locations: ${data.details.locations.join(", ") || "None"}</p>
        <p>Persons: ${data.details.persons.join(", ") || "None"}</p>
        <h4>Violations:</h4>
        <ul>${data.violations.length > 0 
                ? data.violations.map(v => `<li>${v.section}: ${v.description}</li>`).join("") 
                : "<li>No violations detected.</li>"}</ul>
    `;
});
