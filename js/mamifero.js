function andarPraFrente(){

}
function andarPraDireita(){
}

function andarPraEsquerda(){
}

function andarPraTras(){
}

function correr(){

}

function morder(){
    let f = document.querySelector("#forca").value
    let m = document.querySelector("p");

    if(f==1){
        m.innerHTML = "Inimigo perdeu a energia!"
    }else if(f==2){
        m.innerHTML = "Inimigo ficou sem pés"
    }else if(f==3){
        m.innerHTML = "Inimigo ficou sem a perna"
    }else if(f==4){
        m.innerHTML = "Inimigo ficou sem os braços"
    }
    else if(f==5){
        m.innerHTML = "Inimigo ficou sem cabeça"
    }

}