let fs = require('fs');  // importo libreria para leer archivos de texto

function listarTareas(tareas){
tareas.forEach (function(parametro) {
  console.log(parametro);
});
}

function agregarTarea (tarea,agrega){
    tarea.push(agrega);
    fs.writeFileSync("./Tareas/tareas.json", JSON.stringify(tarea, null, " "));
}

function borrarTarea (tarea,cod){
  tarea2 = tarea.filter(function(dato){
    return tarea.codigo != dato;
  });
  fs.writeFileSync("./Tareas/tareas.json", JSON.stringify(tarea2, null, " "));
  }


module.exports = {listarTareas, agregarTarea,borrarTarea};
