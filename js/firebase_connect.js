(function(){

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCkJhAVn9S_ZcCdbwYlhuwS5c3t03exIcA",
    authDomain: "myapplicationdb-a64ed.firebaseapp.com",
    databaseURL: "https://myapplicationdb-a64ed.firebaseio.com",
    projectId: "myapplicationdb-a64ed",
    storageBucket: "myapplicationdb-a64ed.appspot.com",
    messagingSenderId: "1029814693507"
  };
  firebase.initializeApp(config);

  const usuarios = document.getElementById('usuarios');
  const ref = firebase.database().ref().child('usuario');

  ref.once('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();

    
    const contenido = document.createElement('div');
    contenido.innerHTML = "<div class='row margin1 aligned-row'><div class='col-md-4'><img src='" + childData.url +
    "' class='img-circle img-responsive'></div>" +    
    "<div class='vcenter'><div class='col-md-12'>" + "<h4>" + childData.nombre + "</h4>" +
    "<p>" + childData.puesto + "</p>" + "</div></div></div>";
    usuarios.appendChild(contenido);

 
             
   // ...
  });
});

  }());