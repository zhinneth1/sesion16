function mostrarImagen(event){
    let imagen=document.getElementById('ver imagen');
    imagen.src=URL.createObjectURL(event.target.files[0]);
   }
   