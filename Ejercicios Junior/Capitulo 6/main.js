

const contenedor = document.querySelector('#container');

function crearLlave(nombre, modelo, precio) {
    img = `<img src="llave.png">`;
    nombre = `<h2>Llave ${nombre}</h2>`;
    modelo = `<h3 id='${modelo}'>Modelo ${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;

    return [img, nombre, modelo, precio];
  };

const changeHidden = (number)=>{
    document.querySelector('.key-data').value = number
}

  let documentFracment = document.createDocumentFragment();

  
  for (let index = 1; index <= 20; index++) {
      let random = Math.round(Math.random()*1000);
      let precioRandom = Math.round(Math.random()*10+30);
      let llave = crearLlave(index, random, precioRandom)
      let div = document.createElement('div');

        div.addEventListener("click", ()=>{changeHidden(random)})
        div.tabIndex = index;

      div.classList.add(`item-${index}`, `flex-item`);
      div.innerHTML = llave[0] + llave[1] + llave[2] +llave[3];
      documentFracment.appendChild(div);      
  }

contenedor.appendChild(documentFracment);