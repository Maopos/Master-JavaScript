//Clases
var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    //Metodos
    Camiseta.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Camiseta.prototype.getMarca = function () {
        return this.marca;
    };
    return Camiseta;
}());
;
var camiseta1 = new Camiseta();
camiseta1.setMarca('UnderArmour');
camiseta1.getMarca();
var playera1 = new Camiseta();
playera1.setMarca('reebook');
console.log(camiseta1);
console.log(playera1);
