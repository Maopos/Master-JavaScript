class Persona {
    public nombre: string;
    public apellido: string;
    public ocupacion: string;
    public edad: number;

        constructor(nombre, apellido, ocupacion, edad) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.ocupacion = ocupacion;
            this.edad = edad;
        }
};

var emilio = new Persona('Emilio', 'Paez', 'Carpintero', 30);

// clase hija

class Estudiante extends Persona{
    public carrera: string;
    public universidad: string;

    // constructor(nombre, apellido, ocupacion, edad, carrera, universidad) {
    //     super(nombre, apellido, ocupacion, edad)
    //     this.carrera = carrera;
    //     this.universidad = universidad;
    // }

}

var sandra = new Estudiante('Sandra', 'Roldan', 'Estudiante', 25);
sandra.carrera = 'Administracion';
sandra.universidad = 'Santo Tomas';

console.log(sandra);
