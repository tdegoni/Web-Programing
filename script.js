// Obtén la referencia al elemento de la notificación toast
const toast = document.querySelector('.toast');

// Muestra la notificación toast
toast.classList.add('show');

// Oculta la notificación después de 5 segundos
setTimeout(function() {
  toast.classList.remove('show');
}, 5000);