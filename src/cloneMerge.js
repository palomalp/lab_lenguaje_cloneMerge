//3.CLONE MERGE

//Clone. Implementa una función que, a partir de un objeto de entrada devuelva un nuevo objeto con las propiedades de source:
//uso spread
const personalData = {
    name: "Paloma",
    surname: "Ledesma",
    age: 34,
};

function clone(source) {
    const copyPersonalData = {...source};
    return copyPersonalData;
};

console.log (clone(personalData));
//comprobación de que son objetos clonados pero diferentes:
console.log (clone(personalData)===personalData); //false.




//Merge. Implementa una función que dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.

var source = { name: "Maria", surname: "Ibañez", country: "SPA" };
var target = { name: "Luisa", age: 31, married: true};

//Solución con spread.
function merge1(source, target){
    return {...target, ...source}; 
/*Si pongo primero el target, da prioridad al source y de los dos names elige María.
Esto ocurre porque las propiedades del segundo pisan las del primero*/
}
console.log (merge1(source,target)); 