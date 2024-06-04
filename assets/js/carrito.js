
let carrito = [];


export function agregarAlCarrito(nombre, grupo, precio, imagen) {
  const producto = {
    nombre,
    grupo,
    precio,
    imagen
  };

  
  const productoExistente = carrito.find(item => item.nombre === nombre);

  if (productoExistente) {
    
    productoExistente.cantidad++;
  } else {
    
    producto.cantidad = 1;
    carrito.push(producto);
  }

  
  actualizarCarritoHTML();
}


function actualizarCarritoHTML() {
  const carritoHTML = document.getElementById('carritoHTML');
  carritoHTML.innerHTML = '';

  carrito.forEach(producto => {
    const productoHTML = document.createElement('div');
    productoHTML.classList.add('producto');
    productoHTML.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <div>
        <h3>${producto.nombre}</h3>
        <p>Grupo: ${producto.grupo}</p>
        <p>Precio: ${producto.precio}</p>
        <p>Cantidad: ${producto.cantidad}</p>
      </div>
    `;
    carritoHTML.appendChild(productoHTML);
  });
}