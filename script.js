function executarHTML() {
    const codigoHTML = document.getElementById('htmlCode').value;
    const novaAba = window.open();

    novaAba.document.open();
    novaAba.document.write(codigoHTML);
    novaAba.document.close();
}
