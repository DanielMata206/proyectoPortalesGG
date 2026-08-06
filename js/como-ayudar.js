document.addEventListener("DOMContentLoaded", () => {
    const botones = Array.from(document.querySelectorAll("[data-ayuda]"));
    const titulo = document.getElementById("recomendacion-titulo");
    const texto = document.getElementById("recomendacion-texto");
    const enlace = document.getElementById("recomendacion-enlace");

    if (!botones.length || !titulo || !texto || !enlace) {
        return;
    }

    const recomendaciones = {
        tiempo: {
            titulo: "Participá como voluntario",
            texto: "Contactá al equipo para conocer las próximas jornadas y las tareas disponibles.",
            enlace: "contacto.html",
            etiqueta: "Contactar a PANAH",
            externo: false
        },
        insumos: {
            titulo: "Prepará una donación en especie",
            texto: "Revisá las necesidades publicadas antes de reunir alimentos o productos de higiene.",
            enlace: "#donaciones-especie",
            etiqueta: "Consultar la guía",
            externo: false
        },
        dinero: {
            titulo: "Realizá un aporte económico",
            texto: "Consultá la página de donaciones para conocer las opciones disponibles.",
            enlace: "donaciones.html",
            etiqueta: "Ir a donaciones",
            externo: false
        },
        difusion: {
            titulo: "Amplificá una campaña oficial",
            texto: "Visitá el perfil de PANAH y compartí sus convocatorias con tus contactos.",
            enlace: "https://www.instagram.com/panah_504/",
            etiqueta: "Visitar Instagram",
            externo: true
        }
    };

    const mostrarRecomendacion = (tipo) => {
        const recomendacion = recomendaciones[tipo];

        if (!recomendacion) {
            return;
        }

        titulo.textContent = recomendacion.titulo;
        texto.textContent = recomendacion.texto;
        enlace.href = recomendacion.enlace;
        enlace.textContent = recomendacion.etiqueta;

        if (recomendacion.externo) {
            enlace.target = "_blank";
            enlace.rel = "noopener noreferrer";
        } else {
            enlace.removeAttribute("target");
            enlace.removeAttribute("rel");
        }

        botones.forEach((boton) => {
            const seleccionado = boton.dataset.ayuda === tipo;
            boton.classList.toggle("activo", seleccionado);
            boton.setAttribute("aria-pressed", String(seleccionado));
        });
    };

    botones.forEach((boton) => {
        boton.addEventListener("click", () => {
            mostrarRecomendacion(boton.dataset.ayuda);
        });
    });
});
