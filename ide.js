document.addEventListener('DOMContentLoaded', () => {
    const runButton = document.getElementById('runButton');
    const codeEditor = document.getElementById('codeEditor');
    const output = document.getElementById('output');
    const languageSelect = document.getElementById('languageSelect');

    runButton.addEventListener('click', () => {
        const code = codeEditor.value;
        const language = languageSelect.value;
        output.textContent = ''; // Clear previous output

        if (language === 'javascript') {
            try {
                const result = eval(code);
                output.textContent = result;
            } catch (error) {
                output.textContent = `Error: ${error.message}`;
            }
        } else if (language === 'python') {
            // For Python, you would need a server-side interpreter
            // This is a placeholder example. Replace with actual Python execution logic
            output.textContent = 'Python execution is not supported in this demo.';
        } else {
            output.textContent = 'Language not supported.';
        }
    });
});