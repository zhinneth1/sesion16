document.getElementById('formulario').addEventListener('submit', function(event){
    const nombre=document.getElementById('nombre').Value.trim();
    const correo=document.getElementById('nombre').Value.trim();
    const imagen=document.getElementById('nombre').Value.trim();
});

function mostrarImagen(event){
    let imagen=document.getElementById('ver-imagen');
    imagen.src=URL.createObjectURL(event.target.files[0]);
   }
   