let num1= 0;
let num2= 0;
let esSegundoDigito ="0";
function mostrarEnDisplay (valor) {
    let elementoDisply=document.getElementById('id_display');
    elementoDisply.innerText=elementoDisply.innerText + valor;
    if(valor !== "+"){
        concatenarNumero (valor);
    }else{
        operacionSumar();
    }
}
function operacionSumar (){
    esSegundoDigito = "1";
}
function concatenarNumero (numero){
    if (esSegundoDigito ==="0"){
        num1 = num1 +numero;
    }else{
        num2 = num2 +numero;
    }
}
