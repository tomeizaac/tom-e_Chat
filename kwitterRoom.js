
//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyD8ib19waGoGXbFI0l5mb-zejmFMCxIboo",
  authDomain: "kwitter-8db6c.firebaseapp.com",
  databaseURL: "https://kwitter-8db6c-default-rtdb.firebaseio.com",
  projectId: "kwitter-8db6c",
  storageBucket: "kwitter-8db6c.appspot.com",
  messagingSenderId: "60232175861",
  appId: "1:60232175861:web:b90a828eaa5a438eeaf5bc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



  function addRoom(){ 
  roomName= document.getElementById("roomName").value;
   
  firebase.database().ref("/").child(roomName).update({
    Objetivo:"adicionar sala"
  });
    
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         roomNames = childKey;
         console.log("Nome da Sala - " + roomNames);
        row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
        document.getElementById("output").innerHTML += row; 
      });
    });
  
  }
  
  getData()

  function redirectToRoomName(name){
    localStorage.setItem("roomName",name);
    window.location= "kwitterPage.html"
  }

  function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("roomName");
    window.location= "index.html"
  }