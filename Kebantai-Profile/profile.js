let check_information = sessionStorage.getItem('verify_email_signup');

if (!check_information) {
  location.replace('../Kebantai-Log-In/login.html');
} else {
  let body = document.querySelector('body');
  body.style.display = 'unset';
}

var firebaseConfig = {
  apiKey: 'AIzaSyCVQiH2DSjYOiRrsmgaSRTObEWkGpHm1sA',
  authDomain: 'kebantai2020.firebaseapp.com',
  databaseURL: 'https://kebantai2020-default-rtdb.firebaseio.com',
  projectId: 'kebantai2020',
  storageBucket: 'kebantai2020.appspot.com',
  messagingSenderId: '290266641346',
  appId: '1:290266641346:web:85b99043fe87f7795a1c5b',
  measurementId: 'G-M3H7QJBJGQ',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Initialize Firestore
const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true,
});

//Initialize Authentication
const auth = firebase.auth();

let menuToggle = document.querySelector('.navigation-toggle');
let rightTab = document.querySelector('.right-header-tab');
let darkBackground = document.querySelector('.dark-background');
let darkBackground2 = document.querySelector('.dark-background-2');

let headerLogo = document.querySelector('.header-logo');
let leftTab = document.querySelector('.left-header-tab');

headerLogo.addEventListener('click', () => {
  if (leftTab.classList.contains('active')) {
    leftTab.classList.remove('active');
    darkBackground.classList.remove('active');
    headerLogo.classList.remove('active');
    rightTab.classList.remove('active');
  } else {
    leftTab.classList.add('active');
    darkBackground.classList.add('active');
    headerLogo.classList.add('active');
  }
});

darkBackground.addEventListener('click', () => {
  leftTab.classList.remove('active');
  darkBackground.classList.remove('active');
  headerLogo.classList.remove('active');
  rightTab.classList.remove('active');
});

menuToggle.addEventListener('click', () => {
  rightTab.classList.add('active');
  darkBackground.classList.add('active');
});

let user_email = localStorage.getItem('verify_email_signup');

let changePassword = document.querySelector('.password-button');
changePassword.addEventListener('click', () => {
  modalPassword.style.display = 'unset';
  auth
    .sendPasswordResetEmail(user_email)
    .then(function () {
      // Email sent.
    })
    .catch(function (error) {
      // An error happened.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('Error: ' + errorMessage);
    });
});

let logout = document.querySelector('.log-out-button');
logout.addEventListener('click', () => {
  modalLeave.style.display = 'unset';
});

let modal = document.querySelectorAll('.modal');
let modalPassword = document.querySelector('.modal-password');
let modalCheck = document.querySelector('.modal-check');
let modalLeave = document.querySelector('.modal-leave');
let modalClose = document.querySelectorAll('.modal-close');

modalPassword.addEventListener('click', () => {
  modalPassword.style.display = 'none';
});

modalCheck.addEventListener('click', () => {
  modalCheck.style.display = 'none';
});

for (let i = 0; i < modalClose.length; i++) {
  modalClose[i].addEventListener('click', () => {
    modal[i].style.display = 'none';
  });
}

let noPassword = document.querySelector('.no-password');
let yesPassword = document.querySelector('.yes-password');
let noLeave = document.querySelector('.no-leave');
let yesLeave = document.querySelector('.yes-leave');

noPassword.addEventListener('click', () => {
  modalPassword.style.display = 'none';
});

yesPassword.addEventListener('click', () => {
  modalPassword.style.display = 'none';
  modalCheck.style.display = 'unset';
});

noLeave.addEventListener('click', () => {
  modalLeave.style.display = 'none';
});

yesLeave.addEventListener('click', () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      window.location.replace('../Kebantai-Homepage-Unsigned/index.html');
    })
    .catch((error) => {
      // An error happened.
    });
});

/*
// Get the user's data
*/

let profile_name = document.querySelector('.profile-name');
let username = document.querySelector('#username');
let email_user = document.querySelector('#email');
let sex = document.querySelector('#sex');
let age = document.querySelector('#age');

// FIREBASE AUTH
// var user = firebase.auth().currentUser;
// if (user != null) {
//   email_user.innerHTML = user.email;
// }

let firebase_room_id = localStorage.getItem('room_id');

// FIRESTORE
db.collection('account')
  .where(firebase.firestore.FieldPath.documentId(), '==', firebase_room_id)
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      profile_name.innerHTML = doc.data().username + "'s";
      email_user.innerHTML = doc.data().email;
      username.innerHTML = doc.data().username;
      sex.innerHTML = doc.data().sex;
      age.innerHTML = doc.data().age;
    });
  })
  .catch((error) => {
    console.log('Error getting documents: ', error);
  });
