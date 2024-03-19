function addUser(){
    username= document.getElementById("userName").value;
    localStorage.setItem("username",username);
    window.location="kwitterRoom.html";
}

    