
class Lista{

    nombre;
    canciones;


    constructor( nombre , canciones ){
        this.nombre = nombre;
        this.canciones = canciones;
    }

    agregarCancion(cancion){
        this.canciones.push(cancion);
    }

    quitarCancion(){}

    adelantar(){}

    retroceder(){}

    get nombre(){
        return this.nombre;
    }
    get canciones(){
        return this.canciones;
    }
    
}


