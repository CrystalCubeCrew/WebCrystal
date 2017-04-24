declare var global: any
declare var require: any

import * as React from 'react'
import * as firebase from 'firebase'
const firebaseui = require('firebaseui')

import './FirebaseLogin.scss'

const webcrystalLogo = require('../../assets/logo.png')

export class FirebaseLogin extends React.Component<undefined, undefined>{
  render() {
    return (
      <div className="login">
        <img src={webcrystalLogo} alt="WebCrystal Logo" width="80px"/>
        <h1>WebCrystal Login</h1>
        <div id="#firebaseui-auth-container"></div>
      </div>
    )
  }

  componentDidMount() {
    var uiConfig = {
      signInSuccessUrl: '#/app',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccess: function(currentUser:any, credential:any, redirectUrl:any) {
          window.location.hash = '#/app'
        }
      },
      queryParameterForWidgetMode: "#/login?mode",
      
      tosUrl: '#/tos'
    };
    
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    
    ui.start('#firebaseui-auth-container', uiConfig);
  }
}