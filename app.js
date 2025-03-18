// Funcionalidades del Proyetco "Challenge-Amigo Secreto"
// 1. Agregar nombres 2. Validar entrada (el nombre ingresado) 3. Visualizar la lista 4. Sorteo aleatorio

// 1. Agregar nombre y 2. Validar entrada   

let listaAmigos = [];


function agregarAmigo() {
    const inputNombreAmigo = document.getElementById("amigo");
    const amistad = inputNombreAmigo.value.trim();

    if (amistad === "") { 
        alert("Escribe un nombre");
    } else if (listaAmigos.includes(amistad)) {
        alert("Nombre existente, escribe un nombre nuevo");
    } else {
        listaAmigos.push(amistad);
        actualizarListaAmigos();
    }  
}

// 3. Visualizar la lista
function actualizarListaAmigos(){

    const listaElementos = document.getElementById("listaAmigos");    
    listaElementos.innerHTML = "";
    listaAmigos.forEach((amigo, index) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        listaElementos.appendChild(item);
    });
}

// 4. Sorteo aleatorio
function sortearAmigo() {
    let totalamigos = listaAmigos.length;
    const amigoSortear = listaAmigos[Math.floor(Math.random() * totalamigos)];
    resultado.innerHTML = `<li><strong>${amigoSortear}</strong> es el amigo secreto</li>`;

    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
}
