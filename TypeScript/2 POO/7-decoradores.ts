
//Decoradores

function estampar(logo:string) {
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log('Gorra estampada con: ' + logo);
            
        }
    }
}

@estampar('Gucci')
class Gorra {
    private color: string;

    public setColor(color){
        this.color = color;
    }
}

var gorra = new Gorra;

gorra.setColor('Negro');
gorra.estampacion();