
//Clases

class Camisetas{
    public color: string;
    public modelo: string;
    public marca: string;
    public talla: string;
    public precio: number;
};

var camiseta = new Camisetas();
camiseta.color = 'rojo';
camiseta.modelo = 'Manga Larga';
camiseta.marca = 'nike';
camiseta.talla = 'L';
camiseta.precio = 10;

var playera = new Camisetas();
playera.color = 'Azul';
playera.modelo = 'Manga Corta';
playera.marca = 'Adidas';
playera.talla = 'M';
playera.precio = 12;

console.log(camiseta);
console.log(playera);





