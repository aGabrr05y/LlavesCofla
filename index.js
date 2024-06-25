const contenedor = document.querySelector(".flex-container")
const abecedario = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

function contraseñas (){
    let contraseña = ""
    for (let i = 0; i < 4; i++) {
        let numeroRandom =Math.floor(Math.random()*abecedario.length); 
        let aleatorio = abecedario[numeroRandom]
        contraseña += aleatorio
    }
    return contraseña
}

function contenido (nombre,modelo,precio){
    img = "<img src='llaves.jpg' alt= 'Imagen de una llave'>";
    nombre = `<h3> Nombre: ${nombre} </h3>`;
    modelo = `<h3> Modelo: ${modelo} </h3>`;
    precio = `<h3> Precio: <b>Q${precio} </b></h3>`;
    return [img, nombre, modelo,precio];
}

let documentFragment = document.createDocumentFragment();
const agarrarunCodigo = (numero) =>{document.querySelector(".input2").value = numero}

function repeticion () {
    for (let num = 0; num < 21; num++ ){
        const precios = Math.ceil(Math.random()*100)
        const modelos = Math.ceil(Math.random()*100);
        const lasConstraseñas = contraseñas()
        let div = document.createElement("div")
        div.classList.add (`item`)
        const datos = contenido(lasConstraseñas,modelos , precios);
        div.innerHTML = datos[0] + datos [1] + datos [2] + datos [3]
        documentFragment.appendChild(div)
        div.addEventListener("click",() =>{
            agarrarunCodigo(modelos) 
        } )

    }
}

repeticion ()
contenedor.appendChild(documentFragment)