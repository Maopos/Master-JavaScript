
//string

let cadena: string = "Mauricio Posada.";

//number

let numero: number = 12;

//boolean

let verdadero_falso: boolean = true;

//any

let cualquiera: any = 'Hola';

cualquiera = 34;

//array

var lenguajes: Array<string> = ['php', 'js', 'html', 'css'];

let years: number[] = [1,2,3,4];

//multiples tipos de datos

let juegos: string | number = 'street figther';

juegos = 1942;

//personalizados

type letrasOnumeros = string | number;

let peliculas: letrasOnumeros[] = ['El padrino', 300, 'Matrix', 1942];



//----------------------------

console.log(cadena + numero + verdadero_falso+cualquiera);
console.log(lenguajes);
console.log(years);
console.log(juegos);
console.log(peliculas);




