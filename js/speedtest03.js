function gorjeta(){
    let nome = document.getElementById("val1").value;
    let mesa = parseInt(document.getElementById("val2").value)
    let valor = parseInt(document.getElementById("val3").value)
    let resultado1 = valor * (10/100)
    resultado1 = resultado1.toFixed(2)
    
    localStorage.setItem("nome" , nome)
    localStorage.setItem("mesa", mesa)
    localStorage.setItem("valor", valor)

    document.getElementById("resultado").innerHTML = `A gorjeta do garçom ${nome}, que atendeu a mesa ${mesa} é ${resultado1}R$`;
}