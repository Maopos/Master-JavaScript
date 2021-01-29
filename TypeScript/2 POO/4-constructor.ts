
class Vehiculo {

    public marca: string;
    public tipo: string;
    public velocidad: string;

    constructor(marca, tipo, velocidad ) {
        this.marca = marca;
        this.tipo = tipo;
        this.velocidad = velocidad;

    }
};

var avion = new Vehiculo('Cesna', 'Aereo', '300km/h');

console.log(avion);
