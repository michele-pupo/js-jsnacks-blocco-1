// Snack 6:
//  - Calcola la somma e la media dei primi 10 numeri.

// calcolo la somma 
// creo la variabile somma
let sumNumbers = 0;

// creo un ciclo for per sommarli insieme

for (let i = 1; i <= 10; i++) {

    // sommo i numeri
    sumNumbers += i;
    
    // stampo in pagina il risultato della somma
    document.querySelector("#sum").innerHTML = `${sumNumbers}`;
}

// calcolo la media
// creo la variabile media
let averageNumbers = sumNumbers / 10;

// stampo in pagina il risultato della media
document.querySelector("#average").innerHTML = `${averageNumbers}`;

