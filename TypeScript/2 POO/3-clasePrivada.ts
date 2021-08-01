
//Clases

class Camiseta{
    public color: string;
    public modelo: string;
    private marca: string;
    public talla: string;
    public precio: number;

    //Metodos
    public setMarca(marca){
        this.marca = marca;
    }

    public getMarca(){
        return this.marca
    }
};

var camiseta1 = new Camiseta();
camiseta1.setMarca('UnderArmour');
camiseta1.getMarca();


var playera1 = new Camiseta();
playera1.setMarca('reebook')


console.log(camiseta1);
console.log(playera1);

