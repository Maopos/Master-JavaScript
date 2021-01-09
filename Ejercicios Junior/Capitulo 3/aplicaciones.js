'use strict'

class App {
	constructor(descargas,puntuacion,peso){
		this.descargas = descargas;
		this.puntuacion = puntuacion;
		this.peso = peso;
		this.iniciada = false;
		this.instalada = false;
	}
	
	instalarExe(){
		if (this.instalada == false) {
			this.instalada = true;
			alert("app instalada correctamente");
		}
		else {
			this.instalada = false;
			alert("app desinstalada correctamente");
		}
	}
	
	abrir(){
		if (this.iniciada == false && this.instalada == true) {
			this.iniciada = true;
			alert("app iniciada");
		}
	}
	cerrar(){
		if (this.iniciada == true && this.instalada == true) {
			this.iniciada = false;
			alert("app cerrada");
		}
	}

	appInfo(){
		return `
		Descargas: <b>${this.descargas}</b></br>
		Puntuacion: <b>${this.puntuacion}</b></br>
		Peso: <b>${this.peso}</b></br>
		`
	}

}


var app1 = new App("16.000","5 estrellas","900mb");
var app2 = new App("1.000","4 estrellas","400mb");
var app3 = new App("6.000","4.5 estrellas","100mb");
var app4 = new App("23.000","4.8 estrellas","1gb");
var app5 = new App("900","5 estrellas","250");
var app6 = new App("17","3.7 estrellas","522mb");
var app7 = new App("42.981","2.9 estrellas","723mb");

app1.instalarExe();
app1.abrir();
app1.cerrar();
app1.instalarExe();



document.write(`
	${app1.appInfo()} <br>
	${app2.appInfo()} <br>
	${app3.appInfo()} <br>
	${app4.appInfo()} <br>
	${app5.appInfo()} <br>
	${app6.appInfo()} <br>
	${app7.appInfo()} <br>
	`);