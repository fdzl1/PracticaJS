class Producto {
    constructor(nombre, precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.vendido = false;
    }

    sumaIva() {
        this.precio = this.precio * 1.21;
    }

    vender() {
        this.vendido = true;
    }
    agregarDescuento(descuento) {
        this.precio = this.precio - (parseFloat(descuento))
    }
    
    mostrar() {
        console.log(this.nombre)
        console.log(this.precio)
        console.log(this.vendido)
    }
}


const producto1 = new Producto("Jorge", "23");
const producto2 = new Producto("Jorge", "23");

producto1.sumaIva();
producto2.vender();
producto2.agregarDescuento("30");
producto2.mostrar()