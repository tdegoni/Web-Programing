document.addEventListener('DOMContentLoaded', function() {
  // Obtén la referencia al elemento de la notificación toast
  const toast = document.querySelector('.toast');

  // Muestra la notificación toast
  toast.classList.add('show');

  // Oculta la notificación después de 5 segundos
  setTimeout(function() {
    toast.classList.remove('show');
  }, 5000);

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

      // Crear botones de suma y resta
      var botonSumar = document.createElement('button');
      botonSumar.textContent = '+';
      botonSumar.classList.add('sumar');
      botonSumar.setAttribute('data-precio', precio); // Agregar atributo data-precio
      botonSumar.addEventListener('click', function() {
        // Obtener el precio del producto
        var precio = parseFloat(this.getAttribute('data-precio'));
        // Actualizar el total y el elemento de lista
        total += precio;
        totalElemento.textContent = total.toFixed(2);
      });

      var botonRestar = document.createElement('button');
      botonRestar.textContent = '-';
      botonRestar.classList.add('restar');
      botonRestar.setAttribute('data-precio', precio); // Agregar atributo data-precio
      botonRestar.addEventListener('click', function() {
        // Obtener el precio del producto
        var precio = parseFloat(this.getAttribute('data-precio'));
        // Verificar si el total es mayor a 0 antes de restar
        if (total > 0) {
          // Actualizar el total y el elemento de lista
          total -= precio;
          totalElemento.textContent = total.toFixed(2);
        }
      });

      // Agregar los botones al elemento de lista
      productoElemento.appendChild(botonSumar);
      productoElemento.appendChild(botonRestar);

      // Agregar el producto al carrito
      listaProductos.appendChild(productoElemento);

      // Actualizar el total
      total += precio;
      totalElemento.textContent = total.toFixed(2);
    });
  }

  var carritoVisible = false;

  function toggleCarrito() {
    var ventana = document.getElementById('carritoVentana');
    carritoVisible = !carritoVisible;
  
    if (carritoVisible) {
      ventana.style.display = 'block';
    } else {
      ventana.style.display = 'none';
    }
  
    // Actualizar contador de productos
    var contadorProductos = document.getElementById('contadorProductos');
    var cantidadProductos = listaProductos.childElementCount;
    contadorProductos.textContent = cantidadProductos;
  }
  

  var botonCarrito = document.getElementById('carritoBtn');
  botonCarrito.addEventListener('click', toggleCarrito);

  var botonFinalizarCompra = document.getElementById('finalizarCompraBtn');
  botonFinalizarCompra.addEventListener('click', function() {
    // Mostrar la notificación toast
    toast.textContent = '¡Felicidades! Su compra ha sido realizada con éxito.';
    toast.classList.add('show');

    // Ocultar la notificación después de 5 segundos
    setTimeout(function() {
      toast.classList.remove('show');
    }, 5000);
  });
});
