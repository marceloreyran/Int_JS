//String o Cadena de Texto ..

const tweet = "Aprende Javascript con Marcelo";
const producto2 = String('Monitor de 30 pulgadas');
const producto3 = new String('Monitor de 40 pulgadas');
const correo = "correo@correo.com";

//lenght se usa para conocer la cantidad de caracteres en una cadena de texto
console.log(tweet.length);

//Conocer la posicion de un caracter en una cadena de texto
console.log(tweet.indexOf('Marcelo'));
// Si no encuentra el caracter en la cadena de texto, devuelve -1
console.log(producto2.indexOf('javascript'));
console.log(correo.indexOf('@'));
//Conocer si un texto esta en una cadena de texto es mas acutal que indexOf
console.log(tweet.includes('Marcelo'));
console.log(producto2.includes('javascript'));