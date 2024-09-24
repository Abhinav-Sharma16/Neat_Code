import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth,sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAaDbRwMVM2H9rmglQqjrB-5xTZOciFdcM",
    authDomain: "neat-code-22c29.firebaseapp.com",
    projectId: "neat-code-22c29",
    storageBucket: "neat-code-22c29.appspot.com",
    messagingSenderId: "910631318193",
    appId: "1:910631318193:web:1148a682a5831c94ef2890"
 };

 const app = initializeApp(firebaseConfig); 
const auth = getAuth(app);



// Reset
const resett = document.getElementById('resett');
resett.addEventListener("click", function(event){
  // prevent page to refresh
event.preventDefault()

// inputs
const emaill = document.getElementById('emaill').value;


  sendPasswordResetEmail(auth, emaill)
  .then(() => {
    
    alert("Mail send to your Email")
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})

