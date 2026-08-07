document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-contacto");

  if (!form) {
    return;
  }

  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const asunto = document.getElementById("asunto");
  const mensaje = document.getElementById("mensaje");
  const exito = document.getElementById("mensaje-exito");

  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function mostrarError(campo, idError, texto) {
    campo.parentElement.classList.add("invalido");
    document.getElementById(idError).textContent = texto;
  }

  function limpiarError(campo, idError) {
    campo.parentElement.classList.remove("invalido");
    document.getElementById(idError).textContent = "";
  }

  function validarNombre() {
    const valor = nombre.value.trim();
    if (valor === "") {
      mostrarError(nombre, "error-nombre", "El nombre es obligatorio.");
      return false;
    }
    if (valor.length < 3) {
      mostrarError(nombre, "error-nombre", "Ingresá al menos 3 caracteres.");
      return false;
    }
    limpiarError(nombre, "error-nombre");
    return true;
  }

  function validarCorreo() {
    const valor = correo.value.trim();
    if (valor === "") {
      mostrarError(correo, "error-correo", "El correo es obligatorio.");
      return false;
    }
    if (!regexCorreo.test(valor)) {
      mostrarError(correo, "error-correo", "Ingresá un correo válido.");
      return false;
    }
    limpiarError(correo, "error-correo");
    return true;
  }

  function validarAsunto() {
    if (asunto.value === "") {
      mostrarError(asunto, "error-asunto", "Seleccioná un asunto.");
      return false;
    }
    limpiarError(asunto, "error-asunto");
    return true;
  }

  function validarMensaje() {
    const valor = mensaje.value.trim();
    if (valor === "") {
      mostrarError(mensaje, "error-mensaje", "El mensaje es obligatorio.");
      return false;
    }
    if (valor.length < 10) {
      mostrarError(
        mensaje,
        "error-mensaje",
        "El mensaje debe tener al menos 10 caracteres.",
      );
      return false;
    }
    limpiarError(mensaje, "error-mensaje");
    return true;
  }

  nombre.addEventListener("input", function () {
    if (nombre.parentElement.classList.contains("invalido")) {
      validarNombre();
    }
  });

  correo.addEventListener("input", function () {
    if (correo.parentElement.classList.contains("invalido")) {
      validarCorreo();
    }
  });

  asunto.addEventListener("change", function () {
    if (asunto.parentElement.classList.contains("invalido")) {
      validarAsunto();
    }
  });

  mensaje.addEventListener("input", function () {
    if (mensaje.parentElement.classList.contains("invalido")) {
      validarMensaje();
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    exito.textContent = "";

    const okNombre = validarNombre();
    const okCorreo = validarCorreo();
    const okAsunto = validarAsunto();
    const okMensaje = validarMensaje();

    if (okNombre && okCorreo && okAsunto && okMensaje) {
      exito.textContent =
        "¡Gracias! Tu mensaje ha sido enviado. Te responderemos pronto.";
      form.reset();
    }
  });
});
