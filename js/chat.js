 function getUsuarios(){

 const usuarios = document.getElementById('usuarios');
  const usuarios2 = document.getElementById('usuarios2');


  const ref = firebase.database().ref().child('usuario');

 
  ref.once('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();

    
    const contenido = document.createElement('div');
    contenido.innerHTML = "<div name='" + childKey + "' class='row margin1 hoverrow' onclick='setSender(this);'><div class='col-md-3'></div><div class='col-md-6'><img src='" + childData.url +
    "' class='img-circle img-responsive center-block'></div><div class='col-md-3'></div>" +    
    "<div class='row'><div class='col-md-12 text-center'>" + "<h5>" + childData.nombre + "</h5>" +
    "<h6>" + childData.puesto + "</h6>" + "</div></div></div>";

    const contenido2 = document.createElement('div');
    contenido2.innerHTML = "<div name='" + childKey + "' class='row margin1 hoverrow' onclick='setRecipient(this);'><div class='col-md-3'></div><div class='col-md-6'><img src='" + childData.url +
    "' class='img-circle img-responsive center-block'></div><div class='col-md-3'></div>" +    
    "<div class='row'><div class='col-md-12 text-center'>" + "<h5>" + childData.nombre + "</h5>" +
    "<h6>" + childData.puesto + "</h6>" + "</div></div></div>";

    
 
    usuarios.appendChild(contenido);
    usuarios2.appendChild(contenido2);
   

 
   // ...
  });
});
}


  

