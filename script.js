document.getElementById('formulario').addEventListener('submit', function(event){
    let nombre=document.getElementById('nombre').value.trim();
    let correoelectronico=document.getElementById('correo').value.trim();
    let imagen=document.getElementById('imagen').value();
    let pass=document.getElementById('pass').value().trim();

    if(!nombre=="" || !correoelectronico==""|| !imagen=="" || !pass==""){
        alert('Por favor, ingrese todos los datos correspondientes. Son obligatorios');
        return false;
    }
});

function mostrarImagen(event){
    let imagen=document.getElementById('ver-imagen');
    imagen.src=URL.createObjectURL(event.target.files[0]);
   }
   