function menu(){
    console.log(" 1.- Ver lista de canciones \n 2.- Seleccionar cancion \n 3.- Parar \n 4.- Reproducir \n 5.- Crear Lista de Reproduccion \n 6.- Ver listas de reproduccion \n 7.- Seleccionar una lista de reproduccion \n 8.- Ordenar canciones por duracion de mayor a menor \n 9.- Ordenar las canciones en orden alfabetico \n 10.- Ordenar las canciones en orden inverso \n 11 .-Salir");
}

function cargarCanciones(){
    cancion1 = new Cancion( "my love", 3.14, 1, "pop", "westlife");
    cancion2 = new Cancion( "scancion2", 2.24, 2, "instrumental", "autor4");
    cancion3 = new Cancion( "acancion3", 1.24, 3, "instrumental", "autor6");
    cancion4 = new Cancion( "bcancion4", 3.15, 4, "electronica", "autor13");
    cancion5 = new Cancion( "jcancion5", 3.04, 5, "pop", "autor12");
    cancion6 = new Cancion( "dcancion6", 3.02, 6, "pop", "autor2");
    cancion7 = new Cancion( "ycancion7", 2.32, 7, "pop", "autor2");
    cancion8 = new Cancion( "xcancion8", 3.34, 8, "electronica", "autor3");
    cancion9 = new Cancion( "zcancion9", 3.12, 9, "musica clasica", "autor4");
    cancion10 = new Cancion( "icancion10", 3.11, 10, "folk", "autor5");
    cancion11 = new Cancion( "cancion11", 3.01, 11, "instrumenta3", "autor4");
    cancion12 = new Cancion( "fcancion12", 2.23, 12, "folk", "autor1");
    cancion13 = new Cancion( "bcancion13", 1.45, 13, "musica clasica", "autor5");
    cancion14 = new Cancion( "dcancion14", 3.23, 14, "pasillo", "autor6");
    cancion15 = new Cancion( "rcancion15", 1.48, 15, "pasillo", "autor7");
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

function mostrarCanciones(listacanciones){
    for (let i = 0; i < listacanciones.length; i++) {
        console.log(listacanciones[i].id , listacanciones[i].nombre);
    }
}

function seleccionarCancion(listacanciones){
    mostrarCanciones(listacanciones);
    id = prompt("Seleccionar cancion : ");    
    return id;
}

function seleccionarYreproducirCancion(listacanciones){
    id = seleccionarCancion(listacanciones);
    console.log("Cancion  con id ", id, "reproduciendo");
    return id; 
}

function encontrarPorID(id){
    for (let i = 0; i < canciones.length; i++) {
        if(canciones[i].id  == id){
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

function crearLista(listacanciones){
    cancionesLista = [];
    opcion = "1";
    while( opcion != "2"){
        console.log(" 1.- Añadir Cancion \n 2.- Concluir creacion de la lista");
        opcion = prompt("Ingrese una opcion : ");
        switch(opcion){
            case "1":
                idCancion = seleccionarCancion(listacanciones);
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

function seleccionarCancionLista(cancionesListaSelec){
    mostrarCanciones(cancionesListaSelec);
    nombreCancion = prompt("Seleccionar cancion (nombre): ");
    bandera = false;
    for (let i = 0; i < cancionesListaSelec.length; i++) {
        if(cancionesListaSelec[i].nombre  == nombreCancion){
            console.log("Cancion ", cancionesListaSelec[i].nombre, "reproduciendo");
            return cancionesListaSelec[i];
            bandera = true;
        }
    }
    if(!bandera){
        console.log("cancion no encontrada");
        return null;
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

function ordenarCancionesMayorMenorDuracion(){
    canciones.sort( function(a , b){return b.duracion-a.duracion})
    mostrarCanciones(canciones);
}

function ordenarPorOrdenAlfabetico(){
    canciones.sort((a, b) => a.nombre.localeCompare(b.nombre, 'en'));
    mostrarCanciones(canciones);
}

function ordenarPorOrdenInverso(){
    canciones.sort((a, b) => b.nombre.localeCompare(a.nombre, 'en'));
    mostrarCanciones(canciones);
}

function ordenarPorId(){
    canciones.sort( function(a , b){return a.id-b.id})
    mostrarCanciones(canciones);
}



let canciones = [];
let listas = [];
let opcion = 1;
let idCancionActual ;
let listaActual;

cargarCanciones();

while(opcion != 11){
    menu();
    opcion = prompt("Ingrese una opcion : ");
    switch(opcion){
        case "1":
            ordenarPorId();
            break;
        case "2" : 
            idCancionActual = seleccionarYreproducirCancion(canciones);
            break;
        case "3":
            pararCancionActual(idCancionActual);
            break;
        case "4":
            volverReproducirCancionActual(idCancionActual);
            break;
        case "5":
            crearLista(canciones);
            break;
        case "6":
            verListas();
            break;
        case "7":
            cancion = seleccionarLista();
            if(cancion != null){
                idCancionActual = cancion.id;
            }
            break;
        case "8":
            ordenarCancionesMayorMenorDuracion();
            break;
        case "9":
            ordenarPorOrdenAlfabetico();
            break;
        case "10":
            ordenarPorOrdenInverso();
            break;
        case "11":
            break;
        default:
            break;
    }
}

