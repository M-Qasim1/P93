//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyATLRz_LyNWZT8SYabebnla4vTGnBpgaMo",
  authDomain: "kwitter-727ff.firebaseapp.com",
  databaseURL: "https://kwitter-727ff-default-rtdb.firebaseio.com",
  projectId: "kwitter-727ff",
  storageBucket: "kwitter-727ff.appspot.com",
  messagingSenderId: "144029442527",
  appId: "1:144029442527:web:d0108e3b044e628ddda46a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "WELCOME " + user_name + "!";

function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room Name -" + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"></div>"
  document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();

  function redirectToRoomName(){
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
  }

  function logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location = "index.html";
  }
