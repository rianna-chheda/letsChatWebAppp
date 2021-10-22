const firebaseConfig = {
    apiKey: "AIzaSyCORwq75fP3H7LN_6CG3DcIFqZ-1GgeP7M",
    authDomain: "chatwebapp-56603.firebaseapp.com",
    databaseURL: "https://chatwebapp-56603-default-rtdb.firebaseio.com",
    projectId: "chatwebapp-56603",
    storageBucket: "chatwebapp-56603.appspot.com",
    messagingSenderId: "557211318953",
    appId: "1:557211318953:web:aa70eb26149f271c3907b8",
    measurementId: "G-WHESN58EVL"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function send(){
    msg = document.getElementById("msg").nodeValue;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        Like:0
    });

    document.getElementById("msg").value = "";
}