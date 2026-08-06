document.addEventListener('DOMContentLoaded', () => {
    const secciones = document.querySelectorAll('main > section');

    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        secciones.forEach((seccion) => seccion.classList.add('revelar'));

        const observador = new IntersectionObserver((entradas) => {
            entradas.forEach((entrada) => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add('visible');
                    observador.unobserve(entrada.target);
                }
            });
        }, { threshold: 0.12 });

        secciones.forEach((seccion) => observador.observe(seccion));
    }

    const header = document.getElementById('header-placeholder');
    const marcarInicioActivo = () => {
        const enlaceInicio = header.querySelector('a[href="index.html"]');
        if (enlaceInicio) enlaceInicio.setAttribute('aria-current', 'page');
    };

    const observadorHeader = new MutationObserver(() => {
        marcarInicioActivo();
        if (header.querySelector('nav')) observadorHeader.disconnect();
    });

    observadorHeader.observe(header, { childList: true, subtree: true });
    marcarInicioActivo();
});
