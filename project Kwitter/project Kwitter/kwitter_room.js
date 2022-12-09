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

user_name = localStorage.getItem("user_name");
            document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

            function addroom(){

                  room_name = document.getElementById("room_name").value;
                  firebase.database().ref("/").child(room_name).update({
                        purpose:"Adding Room Name"
                  });
                  localStorage.setItem("room_name" , room_name);
                  window.location = "chat_room.html";
            
            }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_name = childKey;
      //Start code
      console.log("room name-"+ Room_names);
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML +=  row;
      //End code
      });});}
getData();

function redirectToRoomName(name){

      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_room.html";

}