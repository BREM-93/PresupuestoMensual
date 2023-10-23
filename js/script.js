class Ingresos {

	constructor(nombre, precio, option){
		this.nombre = nombre;
		this.precio = precio;
		this.option = option;
	}

}

document.addEventListener("DOMContentLoaded", function() {

    function FechaActual() {
        const fechaActual = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        const fechaFormateada = fechaActual.toLocaleDateString(undefined, options);
        document.getElementById("fecha-actual").textContent = fechaFormateada;
    }
    FechaActual();
  }
);

class UI {
	addProduct(ingreso){
		let contenido1 = document.getElementById('content1');
		let contenido2 = document.getElementById('content2');
		let element = document.createElement('div');

		if(ingreso.option == "ingresos"){
			let valor1 = parseFloat(ingreso.precio);

			element.innerHTML = `<div class="card mb-3">
				<div class="card-body carta">
					<p>${ingreso.nombre}</p>
					<p class="carta1">+${valor1}</p> 
				</div>
			</div>`;

		contenido1.appendChild(element);
		} 
		else if (ingreso.option == "egresos"){
			let valor1 = parseFloat(ingreso.precio);
			let n = valor1;
			let i = 0;

			 let porcentaje = (n * 100)/dato1;
			 i = Math.round(porcentaje);

			element.innerHTML = `
			<div class="card mb-3">
				<div class="card-body carta">
					<p>${ingreso.nombre}</p>
					<p>-${n} <b>${porcentaje.toFixed(2)} ~ ${i}%</b></p>  
				</div>
			</div>`;

		contenido2.appendChild(element);

		}
	}

	resetForm(){
		document.getElementById('product-form').reset();
	}

	deleteProduct(){
	}
}

ListIng = [];
ListEgr = [];
label1 = document.getElementById('lab_ing');
label2 = document.getElementById('lab_egr');
label3 = document.getElementById('id_total');
porcentaje = document.getElementById('porcentaje');

document.getElementById('product-form').addEventListener(
	
	'submit', function(e) {
	
	let nombre = document.getElementById('name').value;
	let precio = parseFloat(document.getElementById('price').value);
	let option = document.getElementById('Opt').value;

	ingreso = new Ingresos(nombre, precio, option);

	let ui = new UI();

	if (nombre != "" && precio != "") {

		ui.addProduct(ingreso);

	} else {
		alert('Error! Vuelva a intentarlo...');
	}

	if(option == "ingresos"){
		ListIng.push(ingreso.precio);
	} else if(option == "egresos"){
		ListEgr.push(ingreso.precio);
	}

	ui.resetForm();
	e.preventDefault();
	agregar();
}
);

function agregar(){

		let numero1 = ListIng;
		let numero2 = ListEgr;
		dato1 = 0;
		dato2 = 0;
		dato3 = 0;
		porcentual = 0;
		x = 0;

		for(let i = 0; i < numero1.length; i++){
			dato1+=numero1[i];
		}

		for(let i = 0; i < numero2.length; i++){
			dato2+=numero2[i];
		}

		dato3 = dato1 - dato2;

		porcentual = (dato2 * 100)/dato1;
		x = Math.round(porcentual);

		label1.innerHTML = `<p>INGRESOS: +${dato1.toFixed(2)}</p>`;
		label2.innerHTML = `<p>EGRESOS: -${dato2.toFixed(2)}</p>`;
		label3.innerHTML = `<h1>${dato3.toFixed(2)}</h1>`;
		porcentaje.innerHTML = `${porcentual.toFixed(2)} ~ ${x}%`;		
}


const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');

let chose = 1;

const changeOption = () => {
	chose == 1 ? (
		option1.classList.value = 'option option-active',
		content1.classList.value = 'content content-active'
		): 
		
		(
		option1.classList.value = 'option',
		content1.classList.value = 'content'
		)

	chose == 2 ? (
		option2.classList.value = 'option option-active',
		content2.classList.value = 'content content-active'
		):
		
		(
		option2.classList.value = 'option',
		content2.classList.value = 'content'
		)
}

option1.addEventListener('click', () => {
	chose = 1;
	changeOption();
}
)

option2.addEventListener('click', () => {
	chose = 2;
	changeOption();
}
)

