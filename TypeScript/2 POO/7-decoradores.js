//Decoradores
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log('Gorra estampada con: ' + logo);
        };
    };
}
var Gorra = /** @class */ (function () {
    function Gorra() {
    }
    Gorra.prototype.setColor = function (color) {
        this.color = color;
    };
    Gorra = __decorate([
        estampar('Gucci')
    ], Gorra);
    return Gorra;
}());
var gorra = new Gorra;
gorra.setColor('Negro');
gorra.estampacion();
