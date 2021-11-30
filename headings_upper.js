/*
Écrivez le code qui transforme tous les titres 
d’une page en majuscule, sans utiliser de CSS.
*/

let HTML = document.getElementsByTagName("h1");

for(let i = 0; i < HTML.length; i++) {
    
    HTML[i].innerText= HTML[i].innerText.toUpperCase();
}