// Obtén la referencia al elemento de la notificación toast
const toast = document.querySelector('.toast');

// Muestra la notificación toast
toast.classList.add('show');

// Oculta la notificación después de 5 segundos
setTimeout(function() {
  toast.classList.remove('show');
}, 5000);


//Carrito

document.addEventListener('DOMContentLoaded', function() {
  // Obtener elementos
  var botonesAgregar = document.getElementsByClassName('agregar-carrito');
  var listaProductos = document.querySelector('.lista-productos');
  var totalElemento = document.getElementById('total');
  var total = 0;

  // Asignar evento a los botones de agregar al carrito
  for (var i = 0; i < botonesAgregar.length; i++) {
    botonesAgregar[i].addEventListener('click', function() {
      var nombre = this.getAttribute('data-nombre');
      var precio = parseFloat(this.getAttribute('data-precio'));

      // Crear elemento de lista con el nombre y precio del producto
      var productoElemento = document.createElement('li');
      productoElemento.textContent = nombre + ' - $' + precio.toFixed(2);
      listaProductos.appendChild(productoElemento);

      // Actualizar el total
      total += precio;
      totalElemento.textContent = total.toFixed(2);
    });
  }
});


var carritoVisible = false;

function toggleCarrito() {
  var ventana = document.getElementById('carritoVentana');
  carritoVisible = !carritoVisible;
  
  if (carritoVisible) {
    ventana.style.display = 'block';
  } else {
    ventana.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var botonCarrito = document.getElementById('carritoBtn');
  botonCarrito.addEventListener('click', toggleCarrito);
});
