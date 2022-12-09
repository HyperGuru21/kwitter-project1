const firebaseConfig = {
      apiKey: "AIzaSyBs8S2-33X7pgv1jUaTTeiOckVVIhKQCr0",
      authDomain: "project-kwitter-13c65.firebaseapp.com",
      databaseURL:"https://project-kwitter-13c65-default-rtdb.firebaseio.com",
      projectId: "project-kwitter-13c65",
      storageBucket: "project-kwitter-13c65.appspot.com",
      messagingSenderId: "1090341654855",
      appId: "1:1090341654855:web:c062df8a4979650eb43c62"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function logout(){

      window.location="index.html"

};





function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_name = childKey;
      //Start code

      //End code
      });});}
getData();
