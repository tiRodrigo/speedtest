function cadrastrarPessoa(){
    let nome = document.querySelector('#valor').value;
    localStorage.setItem("nome", nome)
    window.location.href = "bemvindo.html"

}
function cancelarCadastro(){
    let btnCancela = document.querySelector("#btnCancela")
    localStorage.removeItem("nome")
    document.querySelector("p").innerHTML = `Inscrição Cancelada😜`
    btnCancela.style.display = "none"    
}