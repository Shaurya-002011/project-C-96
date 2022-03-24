function badUser()
{
    teacher_name = document.getElementById("Teacher_name").value;
    localStorage.setItem("Teacher_name", teacher_name);
    window.location = "chatyChat_teacher_room.html";
}

teacher_name = localStorage.getItem("Teacher_name");
document.getElementById("user_name").innerHTML="Welcome "+ teacher_name +"!!!!!!";
