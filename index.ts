import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇

const systemName: string = "LogSystem";
const version: number = 10.3;
const userName: string = "JCerdan";

console.log( "================*==================");
console.log( "  Nombre del sistema  " + systemName + " v" + version);
console.log( "  ¡Bienvenido, [" + userName + "]!");
console.log( "==================================");

const answer = await rl.question("¿Cuál es tu nombre? ");
console.log(`Hola, ${answer}!`);

let usuarioJ: string = answer;
let cuentasJ = 0;
let opcionJ: string = " ";
let tareaJ: string[] = []; 

do {
    console.log( "\n===  MENU DE TAREAS  ===");
    console.log( "     a = agregar tarea   ===");
    console.log( "     e = eliminar tarea  ===");
    console.log( "     l = lista de tareas ===");
    console.log( "     s = salir del menu  ===");
    opcionJ = await rl.question("Elija una letra: ");

    //

    switch (opcionJ.trim().toLowerCase()) {
        case "a":
            const nuevaTarea = await rl.question("Introduce el título de la tarea: ");
            if (nuevaTarea.trim() !== "") {
                tareaJ.push(nuevaTarea.trim());
                console.log(` Tarea "${nuevaTarea}" agregada con éxito.`);
            } else {
                console.log(" El título de la tarea no puede estar vacío.");
            }
            break;

        case "e":
            if (tareaJ.length > 0) {
                const eliminada = tareaJ.pop();
                console.log(`  Se eliminó la última tarea: "${eliminada}"`);
            } else {
                console.log("  No hay tareas en la lista para eliminar.");
            }
            break;

        case "l":
            console.log("\n--- LISTA DE TAREAS ---");
            if (tareaJ.length === 0) {
                console.log("No hay tareas registradas.");
            } else {
                for (let i = 0; i < tareaJ.length; i++) {
                    console.log(`${i + 1}. ${tareaJ[i]}`);
                }
            }
            break;

        case "s":
            console.log("Gracias por probar la App... vuelve pronto!");
            break;

        default:
            cuentasJ++;
            if ( cuentasJ > 3) {
               console.log(`${answer}, debes usar las opciones sugeridas\n`); 
               cuentasJ = 0;
            }
            break;

    }
    //
         
} while (opcionJ !== "s");

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();

//