document.getElementById('formulario').addEventListener('submit', function(event){
    const nombre=document.getElementById('nombre').Value.trim();
    const correoelectronico=document.getElementById('correoelectronico').Value.trim();
    const imagen=document.getElementById('imagen').Value().trim();

    if(!nombre=="" || !correoelectronico==""|| !imagen==""){
        alert('Por favor, ingrese todos los datos correspondientes. Son obligatorios');
        event.preventDefault();
        return;
    }
});

function mostrarImagen(event){
    let imagen=document.getElementById('ver-imagen');
    imagen.src=URL.createObjectURL(event.target.files[0]);
   }
   