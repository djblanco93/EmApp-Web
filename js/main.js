 (function(){

 const usuarios = document.getElementById('usuarios');
  const ref = firebase.database().ref().child('usuario');

 
  ref.once('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();

    
    const contenido = document.createElement('div');
    contenido.innerHTML = "<div id='" + childKey + "' class='row margin1 aligned-row' onclick='getId(this);'><div class='col-md-4'><img src='" + childData.url +
    "' class='img-circle img-responsive'></div>" +    
    "<div class='vcenter'><div class='col-md-12'>" + "<h4>" + childData.nombre + "</h4>" +
    "<p>" + childData.puesto + "</p>" + "</div></div></div>";
 
    usuarios.appendChild(contenido);

   

 
   // ...
  });
});

    }());

