/*
Écrivez le code qui ajoute la longueur de chaque paragraphe (balise <p>) au début de celui-ci.

Astuce : insertAdjacentHTML
*/

let arrayHTML = document.getElementsByTagName("p");

for(let i = 0; i < arrayHTML.length; i++) {
    arrayHTML[i].insertAdjacentHTML('afterbegin', arrayHTML[i].innerHTML.length + " ");
}