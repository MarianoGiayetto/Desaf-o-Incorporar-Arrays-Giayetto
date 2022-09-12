// Simulador de compra de 3 productos para limpieza de autos.

// Declaro mi constructor Producto
class Producto{
    constructor(id,nombre,precio){
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
    }
// Método para realizar el listado    
    mostrarProductos (){
        return this.id +" - "+ this.nombre +" - Precio: $"+ this.precio;
    }
}
// Declaro mi "base de datos" de productos en el array stock
let stock = [];
stock.push (new Producto(1, "Shampo NXT", 5000));
stock.push (new Producto(2, "Cera California Gold", 10000));
stock.push (new Producto(3, "Microfibra Waffle", 1000));

let listado ="";
// Recorro el array stock y voy agregando al listado los productos
// con el formato del método mostrarProducto
stock.forEach((el) => listado += el.mostrarProductos()+"\n");

// Declaro mis variables, array carrito, cantidad y selección vacíos
let carrito = []
let cantidad = ""; 
let seleccion = "";

// Función para elegir el producto
function elegirProducto(){
    seleccion = Number(prompt("Elija el producto que desea comprar: \n" + listado));
// Reviso que la opción sea correcta   
    while (seleccion < 1 || seleccion > stock.length) {
	    alert("Opción incorrecta, intente nuevamente");
	    seleccion = Number(prompt(listado))
    }
    alert(`El usuario seleccionó: ${stock[seleccion - 1].nombre}`)
    cantidad = Number(prompt("Ingrese la cantidad deseada del producto seleccionado: " + "("+stock[seleccion-1].nombre+" - Precio: $"+stock[seleccion-1].precio+" c/u"+")"));
}

// Función para agregar un producto al carrito y calcular el total acumulado
function agregarAlCarrito(prod,cantidad){    
    let producto = stock.find(product => product.id===prod);
    producto.cantidad = cantidad
    producto.total = producto.precio * cantidad
    carrito.push(producto)
    alert("El total acumulado hasta el momento es de: $"+ producto.total)
}

// Función para calcular el total del carrito
function calcularTotal(carrito){
    let total = 0;
    carrito.forEach(producto => total += producto.total)
    return total
}

// Menú para interactuar con el usuario
let opcion = prompt("Bienvenidos a Detail Garage, elija la opción deseada: \n 1 - Comprar productos \n 2 - Finalizar compra \n 3 - Salir");
while (opcion != "3") {
    switch (opcion){
        case "1":
            elegirProducto();
            agregarAlCarrito(seleccion, cantidad)
            break;    
        case "2":
            if (calcularTotal(carrito)== 0){
                alert("Lo esperamos para su próxima compra.")
            }else{
                alert("Muchas gracias por su compra, el total de su compra es de: $" + calcularTotal(carrito))
            }
            break;
        default:
            break;
        }
        opcion = prompt("¿Qué otra acción desea realizar? \n 1 - Comprar más productos \n 2 - Finalizar compra \n 3 - Salir") 
}

alert("Muchas gracias. Saludos!")




