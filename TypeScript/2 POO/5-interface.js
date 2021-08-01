;
var Pelicula = /** @class */ (function () {
    function Pelicula(nombre, genero, duracion) {
        this.nombre = nombre;
        this.genero = genero;
        this.duracion = duracion;
    }
    Pelicula.prototype.setGenero = function (genero) {
        this.genero = genero;
    };
    Pelicula.prototype.getGenero = function () {
        return this.genero;
    };
    return Pelicula;
}());
var dracula = new Pelicula('Dracula', 'Suspenso', 120);
console.log(dracula);
