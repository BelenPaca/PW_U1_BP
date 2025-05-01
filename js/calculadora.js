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
    miProfesor.apellidos='Perez';

    console.log(miProfesor);

    if(miProfesor.ciudad === 'Quito'){
        console.log('Es de la Capital');
    }

    const estudiante1 = {
        nombre: 'Andres',
        apellidos: 'Cueva',
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
const fundamentosJS = (num1,num2) =>{
// const fundamentosJS(){
    const ciudadano = {
        nombre : 'Belen',
        apellido : 'Paca',
        direccion : {
            callePrincipal : 'Av. America',
            calleSecundaria : 'Av. La Gasca',
            numeracion : '5620',
            barrio : {
                referencia : 'Frente al Dilipa'
            }
        }
    }
    console.log(ciudadano);
    console.log(ciudadano.nombre);
    console.log(ciudadano.direccion);
    console.log(ciudadano.direccion.callePrincipal);
    console.log(ciudadano.direccion.barrio);
    ciudadano.direccion.callePrincipal = 'Av. Amazonas';
    console.log(ciudadano);

    const est1 = {
        nombre : 'Andres',
    }

    const est2 = {
        nombre : 'Paul',
    }

    const arregloEstudiantes = [est1,est2];
    console.log(arregloEstudiantes);


    // otra forma de declarar un arreglo
    const arregloEstudiantes2 = [{nombre: 'Carla', apellido :'Casillo' },{nombre: 'Diana', apellido :'Teran' }];
    console.log(arregloEstudiantes2);
    
    // forma de imprimir un elemento del arreglo acompañado de . para acceder a un atributo de la misma
    // util cuando no voy a hacer cambios a los elementos del arreglo
    console.log(arregloEstudiantes2[1].apellido);

    // Desestructuracion de Arreglos
    // una manera mas sencilla de acceder a ellos es atraves de una referencia directa 
    const colores = ['Amarillo', 'Azul', 'Rojo', 'Verde', 'Naranja']
    // Declaro un alias a cada posicion de mi arreglo
    const [c1,c2,c3,c4,c5] = colores;

    console.log(c1);
    console.log(c5);

    const [col1,col2] = colores;
    console.log(col1);
    console.log(col2);

    const [,,ctres] = colores;

    console.log(ctres);

    // puedo desestructura de forma directa
    const [c01,c02] = ['Amarillo', 'Azul', 'Rojo', 'Verde', 'Naranja'];

    console.log(c01,c02);

    desestructuracionArray(colores);

    const [,p2,p3,p4,p5,p6,p7,p8,p9,p10] = desestructuracionArray2();
    console.log(p2);
    console.log(p10);

    // como conclusion la desestructuracion de objetos se realiza a traves de sus pocisiones
    
    // DESESTRUCTURACION POR OPERADOR RES
    // EN CIERTOS ESCENARIOS QUIERO DESESTRUCTURAR UNA PARTE Y EL RESTO QUIERO QUE SE ANTENGA IGUAL

    console.log('Desestructuracion por operador Rest')
    const[p1,...resto]=desestructuracionArray2();
    console.log(p1);
    console.log(resto);



    // DESESTRUCTURACION DE OBJETOS

    const auto = {
        marca: 'Toyota',
        modelo: 'Prius',
        anio: 2020,
        color: 'Amarillo'
    }

    // elcriterio de desestructuracion son los nombres del atributo
    const {marca,color,anio} =  auto;
    console.log(color);

    const {anio1,} = {
        marca1: 'Toyota',
        modelo1: 'Prius',
        anio1: 2020,
        color1: 'Amarillo'
    }

    console.log(anio1);

    desestructuracionObjeto(auto);


    // objeto con atributo de tipo objeto
    const universidad = {
        nombre: 'UCE',
        direccion: 'America',
        rector: {
            nombreR: 'Alfoso',
            apellidoR: 'Espinoza'
        }
    }

    // la desestructruracion no se guia por porsicion pero por nombre del atributo
    const {nombre,direccion,rector} =  universidad;
    const {nombreR,apellidoR} = rector
    console.log(nombreR)
    console.log(apellidoR)

    // se puede realizar la desestructuracoin de objetos dentro de objetos en una sola linea

    const universidad2 = {
        nombre2: 'UCE',
        direccion2: 'America',
        rector2: {
            nombreR2: 'Ericksson',
            apellidoR2: 'Almeida'
        }
    }

    const {nombre2,rector2 :{nombreR2,apellidoR2}} = universidad2;
    console.log(nombreR2);
    console.log(apellidoR2);

    
    // DESESTRUCTURACION POR OPERADOR REST PARA OBJETOS
    
    const autoR = {
        marcaR: 'Toyota',
        modeloR: 'Prius',
        anioR: 2020,
        colorR: 'Amarillo'
    }


    console.log('Desestructuracion por operador Rest Objetos')

    const{marcaR,...restoO}=autoR;
    console.log(marcaR);
    console.log(restoO);





}


// se puede desestructuran en cualquier parte del codigo un arreglo
// yo a cualquier variable que sea un arreglo la puedo desestructuracionArray, sea como retorno de un objeto, como un argumento
function desestructuracionArray([c1,c2,c3]){
    console.log(c1);
    console.log(c2);
    console.log(c3);

}

function desestructuracionArray2(){
    const colores = ['Rosado', 'Celeste', 'Carmin', 'Verde', 'Naranja']
    return colores;

}

function desestructuracionObjeto({marca,color}){
    console.log(marca);
    console.log(color);
    
}

function desestructuracionObjeto2(){
    const auto = {
        marca: 'Toyota',
        modelo: 'Prius',
        anio: 2020,
        color: 'Amarillo'
    }

}


