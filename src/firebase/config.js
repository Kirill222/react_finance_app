import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCel_YOxnb5WQuH7VVcfKwkJiLSsjQGE7E",
    authDomain: "react-finance-app-69a4e.firebaseapp.com",
    projectId: "react-finance-app-69a4e",
    storageBucket: "react-finance-app-69a4e.appspot.com",
    messagingSenderId: "660997969910",
    appId: "1:660997969910:web:444b22295af3e89780d9d7"
  }

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  export {projectFirestore, projectAuth}