let fs = require('fs');  // importo libreria para leer archivos de texto
let obj_json = fs.readFileSync('./Tareas/tareas.json');  // Leo el archivo con o sin 'utf-8'
let obj_literal = JSON.parse(obj_json);  // convierto el archivo

let {listarTareas,agregarTarea,borrarTarea} = require ("./funcionesDeTareas/funcionesDeTareas");

//listarTareas(obj_literal);

// let nuevaTarea = {
//     codigo: 6,
//     titulo: "sacar a pasear el perro",
//     estado: "terminado"
// }
// agregarTarea (obj_literal,nuevaTarea);
// console.log (obj_literal);

borrarTarea (obj_literal,2);
console.log (obj_literal);


/*// Manera 2


let obj_literal2 = require('./tareas.json');

console.log(obj_literal2);
*/