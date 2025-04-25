const SUMA = '+';
const RESTA = '-';
const MULTIPLICACION = '*';
const DIVISION = '/';
 
function sumar (numero1, numero2){
    return numero1 + numero2;
}
 
function restar (numero1, numero2){
    return numero1 - numero2;
}
 
function dividir (numero1, numero2){
    return numero1 / numero2;
}
 
function multiplicar (numero1, numero2){
    return numero1 * numero2;
}
 
function evaluarOperacion(tipo){
    let num1=parseFloat(document.getElementById('id_numero_1').value);
    let num2=parseFloat(document.getElementById('id_numero_2').value);
   
    let resultado=0;
 
 
    if(tipo === SUMA){
        resultado=sumar(num1, num2);
 
    }
    if(tipo === RESTA){
        resultado=restar(num1, num2);
 
    }
    if(tipo === MULTIPLICACION){
        resultado=multiplicar(num1, num2);
 
    }
    if(tipo === DIVISION){
        resultado=dividir(num1, num2);
 
    }
 
    document.getElementById('id_resultado').innerText = document.getElementById('id_resultado').innerText + resultado.toString();
   
 
}
 
const fundamentos = (num1,num2) =>{
console.log('Fundamentos JS')
 
    // Tipos de Variables
    // Var : antiguo u obsoleto
    // let: para Variables cambiantes
    // cons: para variables constantes
    let nombre = '10';
    let numero = 10;
    let arreglo = [1,2,3,4,5]
 
    const nombrec = '10'
 
    console.log(arreglo);
    console.log('texto de prueba')
 
    // Arreglos
    const diasLaborables = ['Lunes','Martes','Miercoles','Jueves','Viernes'];
    console.log(diasLaborables);
    console.log(diasLaborables[0]);
 
    // let valor = '';
    // console.log(valor);
 
    // el arreglo yo puedo modificar su contenido pero no su tipo
    diasLaborables.push('Sabado');
    diasLaborables.unshift('Dias');
    console.log(diasLaborables);
 
    const numerosImpares = [1,3,5,7,9]
    const numerosPares = [2,4,6,8];
 
    const numeros = numerosImpares.concat(numerosPares);
 
    console.log(numero);
 
    // Sentencias de control
 
    for(const dia of diasLaborables){
        console.log(dia);
        if(dia ==='Viernes'){
            console.log('Por fin es viernes')
        }else{
            console.log('Aun no es viernes')
        }
 
 
        if(dia !== 'viernes'){
            console.log('Dia Normal')
        }else{
            console.log('Dia de Salida')
        }
    }
 
    // manejo de objetos
 
    const miProfesor = {
        nombre: 'Belen',
        apellidos: 'Paca',
        edad: 24,
        ciudad: 'Quito'
    }
 
    console.log(miProfesor);
    console.log(miProfesor.nombre);
    // seteo de atributos
    miProfesor.apellidos='Teran';
 
    console.log(miProfesor);
 
    if(miProfesor.ciudad === 'Quito'){
        console.log('Es de la Capital');
    }
 
    const estudiante1 = {
        nombre: 'Andy',
        apellidos: 'C',
        edad: 26,
        ciudad: 'Quito'
    }
 
    const estudiante2 = {
        nombre: 'belen',
        apellidos: 'paca',
        edad: 24,
        ciudad: 'Quito'
    }
 
    const estudiante3 = {
        nombre: 'Dario',
        apellidos: 'Vergara',
        edad: 22,
        ciudad: 'Quito'
    }
 
    let arregloEstudiantes = [estudiante1,estudiante2,estudiante3]
    console.table(arregloEstudiantes);
 
}