// Snack 5:
//  - Stampa il cubo dei primi N numeri,
//  - (partendo da 1, il numero N indicato dall'utente è compreso)
//  - dove N è un numero indicato dall’utente.

// chiedo un numero all'utente tramite un prompt

const number = prompt("Scrivi un numero");
const cubeNumber = document.querySelector("#cube")

// calcolo il cubo del numero e dei suoi precedenti tramite un ciclo for
for (let i = 1; i <= number; i++){

    // calcolo il cubo del numerocube
    let cube = i ** 3;
    console.log(cube);

    // creo un nuovo elemento li
    const newElement = document.createElement("li");

    // scrivo il numero preso dall'array di numeri dispari
    newElement.innerText = cube;
    
    // lo appendo alla lista in pagina
    cubeNumber.append(newElement);
}

