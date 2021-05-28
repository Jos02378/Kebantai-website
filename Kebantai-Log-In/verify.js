// let menuToggle = document.querySelector('.navigation-toggle');
// let rightTab = document.querySelector('.right-header-tab');
// let darkBackground = document.querySelector('.dark-background');

// darkBackground.addEventListener('click', () => {
//     darkBackground.classList.remove('active');
//     rightTab.classList.remove('active');
// });

// menuToggle.addEventListener('click', () => {
//     rightTab.classList.add('active');
//     darkBackground.classList.add('active');
// });

var firebaseConfig = {
    apiKey: "AIzaSyCVQiH2DSjYOiRrsmgaSRTObEWkGpHm1sA",
    authDomain: "kebantai2020.firebaseapp.com",
    databaseURL: "https://kebantai2020-default-rtdb.firebaseio.com",
    projectId: "kebantai2020",
    storageBucket: "kebantai2020.appspot.com",
    messagingSenderId: "290266641346",
    appId: "1:290266641346:web:85b99043fe87f7795a1c5b",
    measurementId: "G-M3H7QJBJGQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Initialize Firestore
const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});

//Initialize Authentication
const auth = firebase.auth();

const verifyBtn = document.querySelector('.verify-resend');
const verifyAlert = document.querySelector('.verify-alert');

verifyBtn.addEventListener('click', () => {

    var user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function () {
        // Email sent.
        console.log("Email verification already sent");

    }).catch(function (error) {
        // An error happened.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error: " + errorMessage);
    })

    verifyAlert.style.opacity = '1';
    setTimeout(() => {
        verifyAlert.style.opacity = '0';
    }, 5000)
    // const intervalId = setInterval(() => {
    //     verifyAlert.style.display = 'unset';
    // }, 3000);
})

// VERIFY EMAIL
let user_email = localStorage.getItem("verify_email_signup");
let user_pass = localStorage.getItem("verify_password_signup");

setTimeout(() => {
    var d = new Date();
    console.log(d.toLocaleTimeString());
    var myVar = setInterval(checkVerification, 3000);

    firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}, 1000)

function checkVerification() {
    // var d = new Date();
    // console.log(d.toLocaleTimeString());

    firebase.auth().signInWithEmailAndPassword(user_email, user_pass).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error: " + errorMessage);
    });

    var user = firebase.auth().currentUser;

    if (user != null) {
        emailVerified = user.emailVerified;
    }

    if (user.emailVerified) {
        window.location.replace("../Kebantai-Homepage-Signed/index.html");
    }

    firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}