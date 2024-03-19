//LINKS FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyD8ib19waGoGXbFI0l5mb-zejmFMCxIboo",
  authDomain: "kwitter-8db6c.firebaseapp.com",
  databaseURL: "https://kwitter-8db6c-default-rtdb.firebaseio.com",
  projectId: "kwitter-8db6c",
  storageBucket: "kwitter-8db6c.appspot.com",
  messagingSenderId: "60232175861",
  appId: "1:60232175861:web:b90a828eaa5a438eeaf5bc"
};

  firebase.initializeApp(firebaseConfig);
  

  username=localStorage.getItem("username");
  roomName=localStorage.getItem("roomName");
      
  
  function send(){
    input=document.getElementById("msg").value;
    firebase.database().ref(roomName).push({
      name:username,
      message:input,
      like:0
    });
    document.getElementById("msg").value=" ";
  }
  
  function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
           firebaseMessageId = childKey;
           messageData = childData;

           console.log(firebaseMessageId);
             console.log(messageData);
             name = messageData['name'];
             message = messageData['message'];
           like = messageData['like'];
           nameWithTag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
           messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
           like_button ="<button class='btn btn-warning' id="+firebaseMessageId+" value="+like+" onclick='updateLike(this.id)'>";
           spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
  
          row = nameWithTag + messageWithTag +like_button + spanWithTag;       
          document.getElementById("output").innerHTML += row;

        } });  }); }
  getData();
  
  function updateLike(messageId){
    button_id= messageId;
    likes= document.getElementById(button_id).value;
    updatedLikes= Number(likes) + 1 ;
    firebase.database().ref(roomName).child(messageId).update({
      like:updatedLikes
    });
  }
  
  function logout() {
  localStorage.removeItem(username);
  localStorage.removeItem(roomName);
  window.location="index.html";
  }
  