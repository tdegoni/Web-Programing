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
  var carritoTabla = document.getElementById('carritoTabla');
  var totalElemento = document.getElementById('total');
  var total = 0;

  // Contador de productos en el carrito
  var contadorProductos = 0;
  var contadorProductosElemento = document.getElementById('contadorProductos');

  // Asignar evento a los botones de agregar al carrito
  Array.from(botonesAgregar).forEach(function(botonAgregar) {
    botonAgregar.addEventListener('click', function() {
      var nombre = this.getAttribute('data-nombre');
      var precio = parseFloat(this.getAttribute('data-precio'));

      // Verificar si el producto ya está en el carrito
      var productoExistente = carritoTabla.querySelector(
        `tr[data-nombre="${nombre}"]`
      );
      
      if (productoExistente) {
        // Incrementar la cantidad del producto
        var cantidadElemento = productoExistente.querySelector('.cantidad');
        var cantidad = parseInt(cantidadElemento.textContent);
        cantidad++;
        cantidadElemento.textContent = cantidad;

        // Actualizar el total y el contador de productos
        total += precio;
        contadorProductos++;
      } else {
        // Crear fila para el nuevo producto
        var fila = document.createElement('tr');
        fila.setAttribute('data-nombre', nombre);

        // Nombre del producto
        var nombreElemento = document.createElement('td');
        nombreElemento.textContent = nombre;
        fila.appendChild(nombreElemento);

        // Cantidad del producto
        var cantidadElemento = document.createElement('td');
        cantidadElemento.textContent = '1';
        cantidadElemento.classList.add('cantidad');
        fila.appendChild(cantidadElemento);

        // Precio del producto
        var precioElemento = document.createElement('td');
        precioElemento.textContent = precio.toFixed(2);
        fila.appendChild(precioElemento);

        // Botones de suma y resta
        var accionesElemento = document.createElement('td');
        var botonSumar = document.createElement('button');
        botonSumar.textContent = '+';
        botonSumar.addEventListener('click', function() {
          var cantidad = parseInt(cantidadElemento.textContent);
          cantidad++;
          cantidadElemento.textContent = cantidad;
          total += precio;
          totalElemento.textContent = total.toFixed(2);
          contadorProductos++;
          contadorProductosElemento.textContent = contadorProductos;
        });
        accionesElemento.appendChild(botonSumar);

        var botonRestar = document.createElement('button');
        botonRestar.textContent = '-';
        botonRestar.addEventListener('click', function() {
          var cantidad = parseInt(cantidadElemento.textContent);
          if (cantidad > 1) {
            cantidad--;
            cantidadElemento.textContent = cantidad;
            total -= precio;
            totalElemento.textContent = total.toFixed(2);
            contadorProductos--;
            contadorProductosElemento.textContent = contadorProductos;
          }
        });
        accionesElemento.appendChild(botonRestar);

        fila.appendChild(accionesElemento);

        // Agregar la fila al carrito
        carritoTabla.appendChild(fila);

        // Actualizar el total y el contador de productos
        total += precio;
        contadorProductos++;
      }

      // Actualizar el total y el contador de productos
      totalElemento.textContent = total.toFixed(2);
      contadorProductosElemento.textContent = contadorProductos;
    });
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

    // Actualizar contador de productos
    var contadorProductos = document.getElementById('contadorProductos');
    var cantidadProductos = document.getElementById('carritoTabla').querySelectorAll('tr').length;
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

  var botonVaciarCarrito = document.getElementById('vaciarCarritoBtn');
  botonVaciarCarrito.addEventListener('click', function() {
    // Vaciar el carrito (eliminar todos los productos)
    carritoTabla.innerHTML = '';
    // Reiniciar el total a 0
    total = 0;
    totalElemento.textContent = '0.00';
    // Reiniciar el contador de productos a 0
    contadorProductos = 0;
    contadorProductosElemento.textContent = contadorProductos;
  });
});
