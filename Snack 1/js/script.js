// Snack 1:
// - L’utente inserisce due parole in successione, con due prompt.
// - Il software stampa prima la parola più corta, poi la parola più lunga.

// prima parola inserita dall'utente
const word1 = prompt("Scrivi la prima parola");

// seconda parola inserita dall'utente
const word2 = prompt("Scrivi la seconda parola");


if (word1.length > word2.length) {

    document.querySelector("#outcome").innerHTML = `La prima parola é più lunga!`;

} else if (word1.length < word2.length){

    document.querySelector("#outcome").innerHTML = `La seconda parola é più lunga!`;

} else {

    document.querySelector("#outcome").innerHTML = `Le due parole hanno la stessa lunghezza!!`;
}    