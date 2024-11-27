let productosSaludables = "Venta de Productos Saludables";

const nombreUsuario = prompt ("Ingrese su nombre");
const apellidoUsuario = prompt ("Ingresa su apellido");

function saludarUsuario (parametro1, parametro2, parametro3) {
    alert ( parametro1 + " " + parametro2 + " " + parametro3);
};

saludarUsuario ("Bienvenidos", "a", "Feel Good");
saludarUsuario ("Hola", nombreUsuario, apellidoUsuario);

alert ("Venta de productos ricos y saludables");

let menuProductos = [
    { id: 1, name: "Mantequilla de mani", precio: 20, stock: 4 },
    { id: 2, name: "Aceite de oliva", precio: 10, stock: 8 },
    { id: 3, name: "Harina de avena", precio: 15, stock: 15 },
    { id: 4, name: "Pan integral", precio: 10, stock: 4 },
    { id: 5, name: "Cookies", precio: 10, stock: 4 },
];

function variedadMenu() {
    alert("Degustá nuestros productos: ");
    menuProductos.forEach(item => {
        alert(` ID: [${item.id}] | ${item.name} | ($${item.precio}) | Stock: ${item.stock}`);
    });
}

variedadMenu()

function productosCompra (){
    let productoId = parseInt (prompt ("Ingresa el ID del producto que quieras comprar"));
    let productoCantidad = parseInt (prompt ("Ingresa la cantidad de productos"));
    let producto = menuProductos.find(item => item.id === productoId);
    debugger

    if (!producto) {
        alert("Producto no encontrado.");
        return;
    }

    if (producto.stock >= productoCantidad){
        producto.stock -= productoCantidad;
        let ordenTotal = producto.precio * productoCantidad;
        debugger
        alert(`Has comprado ${producto.name} x ${productoCantidad}. Total: $${ordenTotal.toFixed(2)}`);
    } else{
        alert(`Lo sentimos, no tenemos suficiente stock de ${producto.name}.`);
    }
};

productosCompra()