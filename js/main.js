// 1. Crear un objeto Persona
// Enunciado:
// Crea un objeto persona que tenga las propiedades: nombre, edad, y ciudad. Luego, imprime cada propiedad por separado en la consola.
console.log('Ejercicio 1:');
const persona = {
  nombre: 'Charlie Brown',
  edad: 27,
  ciudad: 'Despeñaperros',
}
for (let propiedad in persona)
  console.log(propiedad);
console.log();

// 2. Modificar propiedades
// Enunciado:
// A partir del objeto persona anterior, cambia el valor de la propiedad ciudad y añade una nueva propiedad llamada profesión. Luego, imprime el objeto actualizado en la consola.
console.log('Ejercicio 2:');
persona.ciudad = 'Algarrabastro de Todos los Santos';
persona.profesion = 'Descapullador de monos';
console.log(persona);
console.log();

// 3. Objeto Libro
// Enunciado:
// Crea un objeto llamado libro con las propiedades titulo, autor, y añoPublicacion. Añade un método llamado resumen que devuelva una cadena con un resumen del libro. Ejemplo de salida: "El libro 'Cien años de soledad' fue escrito por Gabriel García Márquez en 1967."
console.log('Ejercicio 3:');
const libro = {
  titulo: '¿Ya llegamos? Guía para padres impacientes',
  autor: 'Padre del año',
  anioPublicacion: 2023,
  resumen: function () { console.log(`El libro '${this.titulo}' fue escrito por ${this.autor} en ${this.anioPublicacion}.`) },
}
libro.resumen();
console.log();

// 4. Array de objetos
// Enunciado:
// Crea un array llamado estudiantes que contenga tres objetos. Cada objeto debe representar un estudiante con las propiedades: nombre, edad, y notaFinal. Luego, recorre el array e imprime el nombre y la nota final de cada estudiante.
console.log('Ejercicio 4:');
const estudiantes = [
  { nombre: 'Peter', edad: 16, notaFinal: 7, },
  { nombre: 'Pepper', edad: 14, notaFinal: 3, },
  { nombre: 'Bob', edad: 18, notaFinal: 9, },
];
estudiantes.forEach(estudiante => Object.values(estudiante).forEach(value => console.log(value)));
console.log();

// 5. Método para calcular la edad
// Enunciado:
// Crea un objeto persona con las propiedades nombre, anioNacimiento, y un método llamado calcularEdad que devuelva la edad actual de la persona basado en el año de nacimiento.
console.log('Ejercicio 5:');
const persona2 = {
  nombre: 'Anaís',
  anioNacimiento: '1993',
  calcularEdad: function () {
    return new Date().getFullYear() - this.anioNacimiento;
  },
};
console.log(persona2.calcularEdad());
console.log();

// 6. Objeto Coche
// Enunciado:
// Crea un objeto llamado coche con las propiedades marca, modelo, año y velocidadActual. Añade un método acelerar que incremente la velocidad actual en 10 unidades y otro método frenar que disminuya la velocidad actual en 10 unidades. Asegúrate de que la velocidad no sea negativa.
console.log('Ejercicio 6:');
const coche = {
  marca: 'Aston Martin',
  modelo: 'DB-9',
  anio: 2006,
  velocidadActual: 0,
  acelerar: function () {
    this.velocidadActual += 10;
  },
  frenar: function () {
    this.velocidadActual = Math.max(this.velocidadActual - 10, 0);
  },
};
console.log(coche.velocidadActual);
for (i = 0; i < 10; i++) coche['acelerar']();  // Probando acceso a método mediante corchetes.
console.log(coche.velocidadActual);
for (i = 0; i < 100; i++) coche.frenar();
console.log(coche.velocidadActual);
console.log();

// 7. Recorrer un objeto
// Enunciado:
// Crea un objeto producto con las propiedades nombre, precio, cantidad. Usa un ciclo for...in para imprimir todas las propiedades y sus valores.
console.log('Ejercicio 7:');
const producto = {
  nombre: 'Alubias en bote',
  precio: 2.40,
  cantidad: 3,
}
for (const key in producto) console.log(`Propiedad: ${key}\nValor: ${producto[key]}`);
console.log();

// 8. Contar propiedades
// Enunciado:
// Crea un objeto animal con al menos cinco propiedades. Luego, escribe una función que cuente y devuelva el número de propiedades que tiene el objeto.
console.log('Ejercicio 8:');

console.log();

// 9. Objeto dentro de otro objeto
// Enunciado:
// Crea un objeto empresa que tenga las propiedades nombre y direccion. La propiedad direccion debe ser otro objeto con calle, ciudad, y codigoPostal. Luego, accede a las propiedades del objeto anidado e imprímelas.
console.log('Ejercicio 9:');

console.log();

// 10. Añadir métodos a objetos
// Enunciado:
// Crea un objeto cuentaBancaria con las propiedades titular, saldo. Añade métodos depositar y retirar que modifiquen el saldo según sea necesario. El método retirar debe asegurarse de que no se pueda retirar más dinero del que hay disponible.
console.log('Ejercicio 10:');

console.log();
