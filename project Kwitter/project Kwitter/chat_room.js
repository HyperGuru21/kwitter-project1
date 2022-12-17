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

  function logout(){

    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }


function leaveroom(){

  localStorage.removeItem("room_name");
  window.location = "kwitter_room.html";

}

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

  function send(){

    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
    
        name : user_name , 
        message : msg     
    
    });
    document.getElementById("msg").value = "";
    }
    