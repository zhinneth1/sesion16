document.getElementById('formulario').addEventListener('submit', function(event){
    const nombre=document.getElementById('nombre').value.trim();
    const correoelectronico=document.getElementById('correo').value.trim();
    const imagen=document.getElementById('imagen').value();
    const pass=document.getElementById('pass').value().trim();

    if(!nombre=="" || !correoelectronico==""|| !imagen=="" || !pass==""){
        alert('Por favor, ingrese todos los datos correspondientes. Son obligatorios');
        return false;
    }
    return true;
});

function mostrarImagen(event){
    let imagen=document.getElementById('ver-imagen');
    imagen.src=URL.createObjectURL(event.target.files[0]);
   }
   