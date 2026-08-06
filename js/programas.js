document.addEventListener("DOMContentLoaded", () => {
    const filtros = Array.from(document.querySelectorAll(".programas-filtro"));
    const tarjetas = Array.from(document.querySelectorAll(".programa-tarjeta"));
    const estado = document.getElementById("estado-filtro");

    if (!filtros.length || !tarjetas.length || !estado) {
        return;
    }

    const aplicarFiltro = (categoria) => {
        let visibles = 0;

        tarjetas.forEach((tarjeta) => {
            const coincide = categoria === "todos" || tarjeta.dataset.categoria === categoria;
            tarjeta.hidden = !coincide;

            if (coincide) {
                visibles += 1;
            }
        });

        filtros.forEach((filtro) => {
            const seleccionado = filtro.dataset.filtro === categoria;
            filtro.classList.toggle("activo", seleccionado);
            filtro.setAttribute("aria-pressed", String(seleccionado));
        });

        estado.textContent = visibles === 1
            ? "Mostrando 1 línea de acción."
            : `Mostrando ${visibles} líneas de acción.`;
    };

    filtros.forEach((filtro) => {
        filtro.addEventListener("click", () => {
            aplicarFiltro(filtro.dataset.filtro);
        });
    });
});
