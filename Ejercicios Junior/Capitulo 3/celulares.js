'use strict'

class celulares {
    constructor(marca, color, peso, rdp, camara, ram){
        this.marca               = marca
        this.color               = color;
        this.peso                = peso;
        this.resolucionDePantall = rdp;
        this.tieneCamara         = camara;
        this.ram                 = ram;
        this.encendido           = false;
        this.info                = `*El celular <b>${marca}</b> es de color ${color}, <br>
                                    su peso es de ${peso}, <br>
                                    tiene una resolución de ${rdp}mm <br>
                                    y una memoria Ram de ${ram}.<br>`
    }
    verInfo(){
        document.write(this.info);
        
    }

    camaraTiene(){
        if(this.tieneCamara == true){
            document.write('El celular ' + this.marca + ' Tiene cámara<br>');
        }
        else {
            document.write('El celular ' + this.marca + ' No tiene cámara<br>');
        }
              
    }

    botonEncendido(){
        if(this.encendido == false){
            document.write(`El celular ${this.marca} esta prendido <br>`);
            this.encendido = true ;
        }
        else {
            document.write(`El celular ${this.marca} esta apagado <br>`);
            this.encendido = false;
            
        }
    }        
}

class celuAltaGama extends celulares{
    constructor(marca, color, peso, rdp, camara, ram, camlenta){
        super(marca, color, peso, rdp, camara, ram);
        this.camlenta = camlenta;
    }
    
    verInfo2(){
        this.verInfo()
        if(this.camlenta == true){
            document.write(`Y ademas graba en camara lenta. <br><br>`);
        }
        else {
            document.write(`Pero NO graba en camara lenta. <br><br>`); 
        }
    }
        
}


var nokia = new celulares('Nokia', 'Morado', '100g', 1800, true, '8gb');

var samsung = new celulares('Samsung', 'Negro', '120g', 1920, true, '16gb');

var iphone = new celulares('Iphone', 'Blanco', '80g', 1200, false, '32gb');

var xiaomi = new celuAltaGama('Xiaomi', 'Azul', '95g', 2200, true, '64gb', true);

var huawei = new celuAltaGama('Huawei', 'Rojo', '195g', 2600, true, '64gb', false);



nokia.verInfo();
samsung.verInfo();
iphone.verInfo();
xiaomi.verInfo();

document.write('<hr>');


nokia.camaraTiene();
samsung.camaraTiene();
iphone.camaraTiene();
xiaomi.camaraTiene();

document.write('<hr>');

nokia.botonEncendido();
nokia.botonEncendido();
// nokia.botonEncendido();
// nokia.botonEncendido();

document.write('<hr>');

xiaomi.verInfo2();
huawei.verInfo2(); 