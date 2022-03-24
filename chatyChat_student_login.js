function addUser()
{
    student_name = document.getElementById("student_name").value;
    localStorage.setItem("student_name", student_name);
    window.location = "chatyChat_student_room.html";
}

student_name = localStorage.getItem("student_name");
document.getElementById("user_name").innerHTML="Welcome "+ student_name +"!!!!!!";


