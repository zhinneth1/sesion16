function validarform(){
    let nombre=document.getElementById("nombre").value.trim();
    let email=document.getElementById("email").value.trim();
    let imagen=document.getElementById("imagen").value();
   
    if(nombre=="" || email==""|| imagen==""){
        alert('Por favor, ingrese todos los datos correspondientes. Son obligatorios');
        return false;
    }
    return true;
};

function mostrarImagen(event){
    let imagen=document.getElementById('ver-imagen');
    imagen.src=URL.createObjectURL(event.target.files[0]);
   }
   