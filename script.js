document.getElementById('formulario').addEventListener('submit', function(event){
    const nombre=document.getElementById('nombre').value.trim();
    const email=document.getElementById('correoelectronico').value.trim();
    const imagen=document.getElementById('imagen').value();
   

    if(!nombre=="" || !email==""|| !imagen==""){
        alert('Por favor, ingrese todos los datos correspondientes. Son obligatorios');
        ;
    }
});

function mostrarImagen(event){
    let imagen=document.getElementById('ver-imagen');
    imagen.src=URL.createObjectURL(event.target.files[0]);
   }
   