const firebaseConfig = {
    apiKey: "AIzaSyANIYT3Yj9x33ViDh8rSsGV8aH_dOQXvVY",
    authDomain: "chatychat-dbb36.firebaseapp.com",
    databaseURL: "https://chatychat-dbb36-default-rtdb.firebaseio.com",
    projectId: "chatychat-dbb36",
    storageBucket: "chatychat-dbb36.appspot.com",
    messagingSenderId: "311295756942",
    appId: "1:311295756942:web:e569687f500c08e3f9d7df"
  };
  

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("Teacher_name");
room_name = localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0,
    });
    document.getElementById("msg").value= "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
//End code
    } });  }); }
getData();
function logout()
{
  localStorage.removeItem("room_name");
  localStorage.removeItem("teacher_name");

  window.location= "index.html";
}

function homeWork()
{
  document.getElementById("hw").innerHTML="Home Work sent✅";
  document.getElementById("hw").style.backgroundColor="green";
}

function homework()
{
  document.getElementById("hw").innerHTML="Home Work deleted✅";
  document.getElementById("hw").style.backgroundColor="#8b04de";
}