function calcular() {
    var num1 = parseInt(document.getElementById("num1").value)
    var num2 = parseInt(document.getElementById("num2").value)
    selector = document.getElementById('selector').value

    switch (selector) {
        case '+':
            calculo = (num1 + num2)
            document.getElementById('resultado').innerHTML = `O Resultado da Soma de ${num1} + ${num2} é  = ${calculo}`;
            break
        case '-':
            calculo = (num1 - num2)
            document.getElementById('resultado').innerHTML = `O Resultado da Subtração de ${num1} - ${num2} é  = ${calculo}`;
            break
        case '*':
            calculo = (num1 * num2)
            document.getElementById('resultado').innerHTML = `O Resultado da Multiplicação de ${num1} X ${num2} é  = ${calculo}`;
            break

        case '/':
            calculo = (num1 / num2)
            document.getElementById('resultado').innerHTML = `O Resultado da Divisão de ${num1} / ${num2} é  = ${calculo}`;
            break
        case '%':
            calculo = (num1 % num2)
            document.getElementById('resultado').innerHTML = `O Resultado da porcentagem de ${num1} % ${num2} é  = ${calculo}`;
            break
    }

}
