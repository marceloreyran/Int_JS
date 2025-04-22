// Variables con Const
// const producto = 'Audfonos Gamer'; // Iniciar variable y asignarle valor
// Diferencia entre let y const es que const no se puede reasignar
// const disponible; // Iniciamos la varible pero sin valor


/* 	
1.	Debe inicializarse al declararse 
const PI = 3.1416; // Correcto
const x; // ❌ Error: falta inicialización

2.	No se puede reasignar
const nombre = "Juan";
nombre = "Pedro"; // ❌ Error: no se puede reasignar

3.	No significa que el valor sea inmutable
Si la variable es un objeto o un array, sus propiedades o elementos pueden cambiar, pero no se puede reasignar la referencia.
const persona = { nombre: "Ana", edad: 25 };
persona.edad = 26; // ✅ Permitido (modifica una propiedad)
persona = { nombre: "Luis" }; // ❌ Error (no se puede reasignar el objeto)

4.	Tiene alcance de bloque (block scope)
{
    const mensaje = "Hola";
    console.log(mensaje); // ✅ "Hola"
}
    
console.log(mensaje); // ❌ Error: mensaje no está definido fuera del bloque
¿Cuándo usar const?
	•	Para valores que no cambiarán (ej. configuraciones, URLs, claves, etc.).
	•	Para evitar errores accidentales al modificar variables.
	•	Para hacer el código más predecible y seguro.

*/