document.addEventListener("DOMContentLoaded", function () {
  const tarjetas = document.querySelectorAll(".evento");
  const botones = document.querySelectorAll(".filtro-btn");
  const secciones = {
    proximos: document.getElementById("proximos"),
    pasados: document.getElementById("pasados"),
  };

  if (botones.length && secciones.proximos && secciones.pasados) {
    botones.forEach(function (boton) {
      boton.addEventListener("click", function () {
        const filtro = boton.getAttribute("data-filtro");

        botones.forEach(function (b) {
          b.classList.remove("activo");
        });
        boton.classList.add("activo");

        tarjetas.forEach(function (t) {
          t.classList.remove("pre-animacion");
        });

        const verProximos = filtro === "todos" || filtro === "proximos";
        const verPasados = filtro === "todos" || filtro === "pasados";

        secciones.proximos.classList.toggle("oculto", !verProximos);
        secciones.pasados.classList.toggle("oculto", !verPasados);
      });
    });
  }

  if (!("IntersectionObserver" in window) || tarjetas.length === 0) {
    return;
  }

  tarjetas.forEach(function (tarjeta) {
    tarjeta.classList.add("pre-animacion");
  });

  const observador = new IntersectionObserver(
    function (entradas, obs) {
      let visibles = 0;
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          const retraso = visibles * 120;
          setTimeout(function () {
            entrada.target.classList.remove("pre-animacion");
          }, retraso);
          visibles = visibles + 1;
          obs.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  tarjetas.forEach(function (tarjeta) {
    observador.observe(tarjeta);
  });
});