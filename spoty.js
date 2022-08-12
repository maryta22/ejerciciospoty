function menu(){
    console.log(" 1.- Buscar canciones \n 2.- Parar \n 3.- Reproducir \n 4.- Crear Lista de Reproduccion \n 5.- Salir del menu");
}


let canciones = [];

function cargarCanciones(){
    cancion1 = new Cancion( "this love ", 3.24, 1, "pop", "chino");
    cancion2 = new Cancion( "i cant ", 3.03, 2, "balada", "nose");
    cancion3 = new Cancion( "sorry ", 3.54, 3, "pop", "nose");
    cancion4 = new Cancion( "lo tenga o no", 3.24, 4, "instrumental", "nose");
    cancion5 = new Cancion( "let it go ", 3.24, 5, "jazz", "nose");
    cancion6 = new Cancion( "la espera ", 3.24, 6, "pop", "jose lusi perales");
    cancion7 = new Cancion( "bye ", "3.24", 7, "pop", "nsync");
    cancion8 = new Cancion( "my love ", 3.24 ,8, "pop", "westlife");
    cancion9 = new Cancion( "beautiful days ", 3.24, 9, "pop", "nose");
    cancion10 = new Cancion( "i love you ", 3.24, 10, "jazz", "nose");
    cancion11 = new Cancion( "start ", 3.24, 11, "pop", "gaho");
    cancion12 = new Cancion( "you are the reason ", 3.24, 12, "pop-rock", "nose");
    cancion13 = new Cancion( "season in the sun ", 3.24, 13, "pop", "westlife");
    cancion14 = new Cancion( "its gonna be me ", 3.24, 14, "pop", "nsync");
    cancion15 = new Cancion( "closer ", 2.24, 15, "pop", "apnk");
    canciones.push(cancion1);
    canciones.push(cancion2);
    canciones.push(cancion3);
    canciones.push(cancion4);
    canciones.push(cancion5);
    canciones.push(cancion6);
    canciones.push(cancion7);
    canciones.push(cancion8);
    canciones.push(cancion9);
    canciones.push(cancion10);
    canciones.push(cancion11);
    canciones.push(cancion12);
    canciones.push(cancion13);
    canciones.push(cancion14);
    canciones.push(cancion15);
}


function mostrarTodasLasCanciones(){
    for (let i = 0; i < canciones.length; i++) {
        console.log(canciones[i]._ID , canciones[i].nombre);
    }
    id = prompt("Seleccionar cancion : ");
    console.log("Cancion  con id ", id, "reproduciendo");
    return id;
}

function encontrarPorID(id){
    for (let i = 0; i < canciones.length; i++) {
        if(canciones[i]._ID  == id){
            return canciones[i];
        }
    } 
}

function pararCancionActual(id){
    cancion = encontrarPorID(id);
    console.log("cancion ", cancion , "detenida")
}

function volverReproducirCancionActual(id){
    cancion = encontrarPorID(id);
    console.log("cancion ", cancion , "reproduciendose")
}

let listas = [];
let opcion = 1;
let idCancionActual;

while(opcion != 5){
    menu();
    cargarCanciones();
    opcion = prompt("Ingrese una opcion : ");
    switch(opcion){
        case "1" : 
            idCancionActual = mostrarTodasLasCanciones();
            break;
        case "2":
            pararCancionActual(idCancionActual);
            break;
        case "3":
            volverReproducirCancionActual(idCancionActual);
            break;
        case "4":
            break;
        case "5":
            break;
        default:
            break;
    }
}

