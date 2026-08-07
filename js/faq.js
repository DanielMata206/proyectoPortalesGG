// Función para abrir y cerrar respuestas
function toggleFaq(button) {
    const respuesta = button.nextElementSibling;
    const todosFaq = document.querySelectorAll('.faq-pregunta');
    const todasRespuestas = document.querySelectorAll('.faq-respuesta');

    // Cerrar todos los otros FAQ
    todosFaq.forEach(btn => {
        if (btn !== button) {
            btn.classList.remove('activo');
        }
    });

    todasRespuestas.forEach(resp => {
        if (resp !== respuesta) {
            resp.classList.remove('visible');
        }
    });

    button.classList.toggle('activo');
    respuesta.classList.toggle('visible');
}

// Función para buscar en las preguntas FAQ
document.addEventListener('DOMContentLoaded', function() {
    const campoBusqueda = document.getElementById('campoBusqueda');
    const faqItems = document.querySelectorAll('.faq-item');

    if (campoBusqueda) {
        campoBusqueda.addEventListener('keyup', function() {
            const textoBusqueda = this.value.toLowerCase();

            faqItems.forEach(item => {
                const pregunta = item.querySelector('.faq-titulo').textContent.toLowerCase();
                const respuesta = item.querySelector('.faq-respuesta').textContent.toLowerCase();

                // Mostrar u ocultar según el texto de búsqueda
                if (pregunta.includes(textoBusqueda) || respuesta.includes(textoBusqueda)) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.3s';
                } else {
                    item.style.display = 'none';
                }
            });

            document.querySelectorAll('.faq-pregunta').forEach(btn => {
                btn.classList.remove('activo');
            });
            document.querySelectorAll('.faq-respuesta').forEach(resp => {
                resp.classList.remove('visible');
            });
        });
    }
});

// Animación para los resultados de búsqueda
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

console.log('FAQ.js cargado correctamente');