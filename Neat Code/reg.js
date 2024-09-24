import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaDbRwMVM2H9rmglQqjrB-5xTZOciFdcM",
  authDomain: "neat-code-22c29.firebaseapp.com",
  projectId: "neat-code-22c29",
  storageBucket: "neat-code-22c29.appspot.com",
  messagingSenderId: "910631318193",
  appId: "1:910631318193:web:1148a682a5831c94ef2890"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app);

// submit button
const submit = document.getElementById('submit');
submit.addEventListener("click", function(event){
  // prevent page to refresh
event.preventDefault()

// inputs
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Account created")
    window.location.href="questions.html";
    // window.open('questions.html', '_self');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})

