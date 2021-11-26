/*
Implémentez une fonction restrict(target, keep) 
qui retire toutes les propriétés de l’objet target 
qui n’apparaissent pas dans l’objet de référence keep.
*/

function restrict(target, keep) {

    
}

const config = { user: "user", pass: "pass" };
const tooMuchConfig = { vars: "LOG=info", user: "user", pass: "pass", env: "prod" };
console.log("vars" in tooMuchConfig); // => true
console.log("env" in tooMuchConfig); // => true

const properConfig = restrict(tooMuchConfig, config);
console.log(properConfig === config); // => false
console.log("vars" in properConfig); // => false
console.log("env" in properConfig); // => false