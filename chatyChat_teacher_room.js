
//ADD YOUR FIREBASE LINKS HERE
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



  function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
      purpose : "Adding Room Name"
  });
  localStorage.setItem("room_name", room_name);

  window.location="chatyChat_teacher_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });
    });

}
getData();

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name", name);

 window.location= "chatyChat_teacher_page.html";
}

function logout()
{
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");

  window.location= "index.html";
}

function sos()
{
  document.getElementById("sos").innerHTML="SOS ACTIVATED✔️";
  document.getElementById("sos").style.backgroundColor="red"; 
}

function Sos()
{
  document.getElementById("sos").innerHTML="SOS DISABLED✔️";
  document.getElementById("sos").style.backgroundColor="blue"; 
}

