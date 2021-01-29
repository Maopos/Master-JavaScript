
interface PeliculaBase{ // Se declaran metodos obligatorios dentro de una clase
    setGenero(genero);
    getGenero();
};

class Pelicula implements PeliculaBase{// Se implementa la interface declarada anteriormente
    private nombre: string;
    private genero: string;
    private duracion: number;

    constructor(nombre, genero, duracion) {
        this.nombre = nombre;
        this.genero = genero;
        this.duracion = duracion;
    }

    public setGenero(genero){
        this.genero = genero;
    }

    public getGenero(){
        return this.genero;
    }
}

var dracula = new Pelicula('Dracula', 'Suspenso', 120);

console.log(dracula);
