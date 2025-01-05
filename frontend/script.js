document.getElementById("analyzeBtn").addEventListener("click", async () => {
    const firText = document.getElementById("firInput").value;

    const response = await fetch('/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: firText })
    });

    const data = await response.json();
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h4>Simplified FIR:</h4><p>${data.simplified_text}</p>
        <h4>Key Details:</h4>
        <p>Dates: ${data.details.dates.join(", ")}</p>
        <p>Locations: ${data.details.locations.join(", ")}</p>
        <p>Persons: ${data.details.persons.join(", ")}</p>
        <h4>Violations:</h4>
        <ul>${data.violations.map(v => `<li>${v.section}: ${v.description}</li>`).join("")}</ul>
    `;
});
