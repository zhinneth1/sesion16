const form = document.getElementById('formulario'");
form.addEventListener('submit', function(event) {
 const nombre = document.getElementById('nombre').value;
 const email = document.getElementById('email').value;
 const imagen=document.getElementById('imagen').value();
 if (nombre=="" || email==""|| imagen=="") {
 alert('Por favor, ingrese todos los datos correspondientes. Son obligatorios');
 event.preventDefault();
 } else {
 alert('¡Formulario correcto!');
 }
})
function mostrarImagen(event){
    let imagen=document.getElementById('ver-imagen');
    imagen.src=URL.createObjectURL(event.target.files[0]);
   }
   