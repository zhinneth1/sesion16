document.getElementById('formulario').addEventListener('submit', function(event){
    const nombre=document.getElementById('nombre').Value.trim();
    const correo=document.getElementById('correo').Value.trim();
    const imagen=document.getElementById('imagen').Value().trim();
    const pass=document.getElementById('pass').Value().trim();

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
   