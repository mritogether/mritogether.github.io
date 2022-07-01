/* globals firebase firebaseui Sentry */

var uiConfig = {
  signInSuccessUrl: '/',
  signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID, 
    firebase.auth.TwitterAuthProvider.PROVIDER_ID], 
    // firebase.auth.EmailAuthProvider.PROVIDER_ID],
  signInFlow: 'popup',
  // data-cancel_on_tap_outside="false",
  // tosUrl: 'tos.html',
  // privacyPolicyUrl: 'tos.html',
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
};
window.uiConfig = uiConfig;

var uiAuth;
window.uiAuth = uiAuth;

const initApp = ({loginUserFn, logoutUserFn}) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      loginUserFn(user);
    } else {
      logoutUserFn(user);
    }
  }, function (error) {
    Sentry.captureException(error);
  });
};

const signIn = () => {
  uiConfig.signInSuccessUrl = location.pathname;
  uiAuth.start('#firebaseui-auth-container', uiConfig);
};
window.signIn = signIn;

const signOut = () => {
  firebase.auth().signOut();
};
window.signOut = signOut;

const startFirebase = () => {
  auth = firebase.auth();
  // auth.useFunctionsEmulator("http://localhost:9099");
  uiAuth = new firebaseui.auth.AuthUI(auth);
};
// const config = {
//   apiKey: "AIzaSyD1q8d3i0jikA5jRQKcDydFbIw8v2bFRc0",
//   authDomain: "cartographer-a6f04.firebaseapp.com",
//   databaseURL: "https://cartographer-a6f04.firebaseio.com",
//   projectId: "cartographer-a6f04",
//   storageBucket: "",
//   messagingSenderId: "489953549172"
// };
const config = {
    apiKey: "AIzaSyDy0GTqSQ_MInxaau2vpQLPfnK6qTfipMc",
    authDomain: "mritogether-graph.firebaseapp.com",
    databaseURL: "https://mritogether-graph-default-rtdb.firebaseio.com",
    projectId: "mritogether-graph",
    storageBucket: "mritogether-graph.appspot.com",
    messagingSenderId: "734707730601",
    appId: "1:734707730601:web:3eb09d634fc31ed51741b8",
    // measurementId: "G-W9KGPQNCM3"
};

// console.log("firebase.initializeApp");
const app = firebase.initializeApp(config);
// firebase.functions().useFunctionsEmulator("http://localhost:5001");
// console.log(firebase.database())
const db = firebase.database();
const storageRef = firebase.storage().ref();
not_inited = true;
db.ref().child('users/').on('value', function (snapshot) {
  usersInfo = {};
  snapshot.forEach(function(data) {
    usersInfo[data.key] = data.val();

    var spaceRef = storageRef.child('speaker_photos/'+ data.key + '.png');
      spaceRef.getDownloadURL().then(function(url) {
               // var test = url;
               // console.log(url);
               img_url = url;
               usersInfo[data.key]['url'] = img_url;
        });
        
        // console.log(data.key);
        // console.log(data.val());
    });
  not_inited = false;
         // usersInfo = snapshot; // not logging
      });

// function task(i) {
//   setTimeout(function() {
//       // console.log(i);
//   }, 2000 * i);
// }
// while (not_inited) {
//   task(10);
// }