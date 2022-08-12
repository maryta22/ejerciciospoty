
class Cancion{

    nombre;
    duracion;
    _ID;
    genero;
    cantante;

    constructor( nombre , duracion , id , genero, cantante){
        this.nombre = nombre;
        this.duracion = duracion;
        this._ID = id;
        this.genero = genero;
        this.cantante = cantante
    }

    reproducir(){
        console.log("Cancion reproduciendose");
    }

    parar(){
        console.log("Cancion detenida");
    }
    
    get nombre(){
        return this.nombre;
    }

    get duracion(){
        return this.duracion;
    }

    get id(){
        return this._ID;
    }

    get genero(){
        return this.genero;
    }

    get cantante(){
        return this.cantante;
    }
    
    
}