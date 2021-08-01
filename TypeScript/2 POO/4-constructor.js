var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, tipo, velocidad) {
        this.marca = marca;
        this.tipo = tipo;
        this.velocidad = velocidad;
    }
    return Vehiculo;
}());
;
var avion = new Vehiculo('Cesna', 'Aereo', '300km/h');
console.log(avion);
