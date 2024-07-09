import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDa7N9IBIGCSsDHHWzF8OjDvy1YZ9LszbQ',
  authDomain: 'webnovel-2fced.firebaseapp.com',
  projectId: 'webnovel-2fced',
  storageBucket: 'webnovel-2fced.appspot.com',
  messagingSenderId: '268198427687',
  appId: '1:268198427687:web:589c1a3a00e577a9f02202',
  measurementId: 'G-HNKMLLYT9R',
};

//테스트 서버
// const firebaseConfig = {
//   apiKey: "AIzaSyC0PEInFxAGEEe7SITYkZiGFDOmhbCBxtA",
//   authDomain: "test-tingel.firebaseapp.com",
//   projectId: "test-tingel",
//   storageBucket: "test-tingel.appspot.com",
//   messagingSenderId: "698126649704",
//   appId: "1:268198427687:web:589c1a3a00e577a9f02202",
//   measurementId: "G-HNKMLLYT9R",
// };

export const app = firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase; // 소셜로그인
export const authService = firebase.auth(app); // 로그인 모듈
