function enviarMensajeWhatsApp() {
    var nombre = document.getElementById('nombre').value;
    var mensaje = document.getElementById('mensaje').value;
    var mensajeWhatsApp = encodeURIComponent("Hola, soy " + nombre + ". Mi mensaje es: " + mensaje);
    var numeroWhatsApp = "5491158180274"; // Reemplazar TUNUMERO con tu número de WhatsApp
    var enlaceWhatsApp = "https://wa.me/" + numeroWhatsApp + "?text=" + mensajeWhatsApp;
    window.location.href = enlaceWhatsApp;
}
