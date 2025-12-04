const btnContinuar = document.getElementById("btnContinuar");
 
btnContinuar.addEventListener('click', () => {
    // captura o nome digitado pelo usuario
    let txtNome = document.getElementById("txtNome").value;
    // armazena o nome do usuario
    localStorage.setItem("nomeUsuario", txtNome);
    // manda para outra pagina
    location.href = "primeiratela.html";
});