// Declaro variables
//let nombre = prompt("Ingresar nombre: ");
//let apellido = prompt("Ingresar apellido: ");
//let num1 = prompt("Ingrese el primer numero; ");
//let num2 = prompt("Ingrese el segundo numero; ");
//let suma = 0;

//Funciones
function mostrarNombre (arg, arg2) {
    console.log("Hola " + arg + " " + arg2)
};

function sumar(num1, num2) {
    
    return num1 + num2;
}

// Muestras
//mostrarNombre(nombre, apellido)
//suma = sumar(num1, num2)
//console.log(suma)


// Funciones flecha o anonimas

let precio = 0.
const sumaFlecha = (a, b) => a + b;
const restaFlecha = (a, b) => a - b;
const iva = x => x * 0.21;
let precioProducto = parseInt(prompt("Ingrese el precio: "));
let descuento = parseInt(prompt("Ingrese el descuento: "));

precio = restaFlecha(sumaFlecha(precioProducto, iva(precioProducto)), descuento)

console.log(precio);