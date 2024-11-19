document.getElementById('formulario').addEventListener('submit', function(event){
    let nombre=document.getElementById('nombre').Value.trim();
    let correo=document.getElementById('correo').Value.trim();
    let imagen=document.getElementById('imagen').Value().trim();
    let pass=document.getElementById('pass').Value().trim();

    if(!nombre=="" || !correo==""|| !imagen=="" || !pass==""){
        alert('Por favor, ingrese todos los datos correspondientes. Son obligatorios');
        event.preventDefault();
        return;
    }
});

function mostrarImagen(event){
    let imagen=document.getElementById('ver-imagen');
    imagen.src=URL.createObjectURL(event.target.files[0]);
   }
   