document.addEventListener('DOMContentLoaded', (event) => {
    var formattedCodeElement = document.getElementById('formattedCode');
    hljs.highlightElement(formattedCodeElement);
});

function formatCode() {
    var code = document.getElementById('codeInput').value;
    var formattedCodeElement = document.getElementById('formattedCode');
    formattedCodeElement.textContent = code;
    hljs.highlightElement(formattedCodeElement);
}

function copyLink() {
    var dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = window.location.href;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    alert("The link to the page has been copied to the clipboard!");
}