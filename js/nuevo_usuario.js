function crearUsuario(nombre,departamento,puesto,telefono,email) {
  var nombre = document.getElementById("nombre").value;
     var departamento = document.getElementById("departamento").value;
      var telefono = document.getElementById("telefono").value;
       var puesto = document.getElementById("puesto").value;
        var email = document.getElementById("email").value;

  firebase.database().ref('usuario').push({
    nombre: nombre,
    departamento: departamento,
    puesto: puesto,
    telefono: telefono,
    email: email
  });

  alert("Usuario Guardado");

	document.getElementById("nombre").value = ""; 
document.getElementById("departamento").value = ""; 
document.getElementById("puesto").value = ""; 
document.getElementById("telefono").value = ""; 
document.getElementById("email").value = ""; 

}



