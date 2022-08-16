function menu(){
    console.log(" 1.- Ver lista de canciones \n 2.- Seleccionar cancion \n 3.- Parar \n 4.- Reproducir \n 5.- Crear Lista de Reproduccion \n 6.- Ver listas de reproduccion \n 7.- Seleccionar una lista de reproduccion \n 8.- Salir");
}

function cargarCanciones(){
    cancion1 = new Cancion( "cancion1", 3.24, 1, "pop", "autor1");
    cancion2 = new Cancion( "cancion2", 3.24, 2, "instrumental", "autor4");
    cancion3 = new Cancion( "cancion3", 3.24, 3, "instrumental", "autor6");
    cancion4 = new Cancion( "cancion4", 3.24, 4, "electronica", "autor13");
    cancion5 = new Cancion( "cancion5", 3.24, 5, "pop", "autor12");
    cancion6 = new Cancion( "cancion6", 3.24, 6, "pop", "autor2");
    cancion7 = new Cancion( "cancion7", 3.24, 7, "pop", "autor2");
    cancion8 = new Cancion( "cancion8", 3.24, 8, "electronica", "autor3");
    cancion9 = new Cancion( "cancion9", 3.24, 9, "musica clasica", "autor4");
    cancion10 = new Cancion( "cancion10", 3.24, 10, "folk", "autor5");
    cancion11 = new Cancion( "cancion11", 3.24, 11, "instrumenta3", "autor4");
    cancion12 = new Cancion( "cancion12", 3.24, 12, "folk", "autor1");
    cancion13 = new Cancion( "cancion13", 3.24, 13, "musica clasica", "autor5");
    cancion14 = new Cancion( "cancion14", 3.24, 14, "pasillo", "autor6");
    cancion15 = new Cancion( "cancion15", 3.24, 15, "pasillo", "autor7");
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

function mostrarCanciones(){
    for (let i = 0; i < canciones.length; i++) {
        console.log(canciones[i]._ID , canciones[i].nombre);
    }
}

function seleccionarCancion(){
    mostrarCanciones();
    id = prompt("Seleccionar cancion : ");    
    return id;
}

function seleccionarYreproducirCancion(){
    id = seleccionarCancion();
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

function crearLista(){
    cancionesLista = [];
    opcion = "1";
    while( opcion != "2"){
        console.log(" 1.- Añadir Cancion \n 2.- Concluir creacion de la lista");
        opcion = prompt("Ingrese una opcion : ");
        switch(opcion){
            case "1":
                idCancion = seleccionarCancion();
                c = encontrarPorID(idCancion);
                cancionesLista.push(c);
                break;
            case "2":
                break;
            default:
                break
        }
        
    }
    listaNombre = prompt("Ingrese el nombre de la lista : ");
    nuevaLIsta = new Lista( listaNombre, cancionesLista);
    listas.push(nuevaLIsta);
}

function verListas(){
    for (let i = 0; i < listas.length; i++) {
        console.log(listas[i].nombre);
    }
}

function encontrarPorNombre(nombre){
    for (let i = 0; i < listas.length; i++) {
        if(listas[i].nombre  == nombre){
            return listas[i];
        }else{
            return null;
        }
    } 
}

function mostrarCancionesLista(cancionesListaSelec){
    for (let i = 0; i < cancionesListaSelec.length; i++) {
        console.log(cancionesListaSelec[i].nombre);
    }
}

function seleccionarCancionLista(cancionesListaSelec){
    mostrarCancionesLista(cancionesListaSelec);
    nombreCancion = prompt("Seleccionar cancion (nombre): ");
    for (let i = 0; i < cancionesListaSelec.length; i++) {
        if(cancionesListaSelec[i].nombre  == nombreCancion){
            console.log("Cancion ", cancionesListaSelec[i].nombre, "reproduciendo");
            return cancionesListaSelec[i];
        }else{
            console.log("cancion no encontrada");
            return null;
        }
    }
}

function seleccionarLista(){
    verListas();
    nombre = prompt("Seleccionar lista : ");
    lista = encontrarPorNombre(nombre);
    if(lista != null ){
        console.log(lista)
        cancion = seleccionarCancionLista(lista.canciones);
        return cancion;
    }else{
        console.log("Lista no encontrada")
    }
}





let canciones = [];
let listas = [];
let opcion = 1;
let idCancionActual ;
let listaActual;

cargarCanciones();

while(opcion != 8){
    menu();
    opcion = prompt("Ingrese una opcion : ");
    switch(opcion){
        case "1":
            mostrarCanciones();
            break;
        case "2" : 
            idCancionActual = seleccionarYreproducirCancion();
            break;
        case "3":
            pararCancionActual(idCancionActual);
            break;
        case "4":
            volverReproducirCancionActual(idCancionActual);
            break;
        case "5":
            crearLista();
            break;
        case "6":
            verListas();
            break;
        case "7":
            cancion = seleccionarLista();
            if(cancion != null){
                idCancionActual = cancion._ID;
            }
            break;
        case "8":
            break;
        default:
            break;
    }
}

