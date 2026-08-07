// Mostrar y ocultar campo de monto personalizado
document.querySelectorAll('input[name="monto"]').forEach(radio => {
    radio.addEventListener('change', function() {
        const campoPersonalizado = document.getElementById('montoPersonalizado');
        if (this.value === 'otro') {
            campoPersonalizado.style.display = 'block';
            campoPersonalizado.required = true;
        } else {
            campoPersonalizado.style.display = 'none';
            campoPersonalizado.required = false;
        }
    });
});

// Manejar envío del formulario
function manejarEnvio(event) {
    event.preventDefault();
    
    // Validar que se haya seleccionado un monto
    const montoSeleccionado = document.querySelector('input[name="monto"]:checked');
    if (!montoSeleccionado) {
        alert('Por favor selecciona un monto de donación');
        return;
    }

    // Mostrar mensaje de éxito
    const mensajeExito = document.getElementById('mensajeExito');
    mensajeExito.style.display = 'block';
    
    // Scroll al mensaje
    mensajeExito.scrollIntoView({ behavior: 'smooth' });

    // Limpiar formulario después de 2 segundos
    setTimeout(() => {
        document.getElementById('formularioDonacion').reset();
        mensajeExito.style.display = 'none';
    }, 3000);

    // Log para debugging
    console.log('Formulario enviado:', {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        pais: document.getElementById('pais').value,
        monto: montoSeleccionado.value,
        metodo: document.getElementById('metodo').value,
        mensaje: document.getElementById('mensaje').value,
        recibir: document.getElementById('recibir').checked
    });
}