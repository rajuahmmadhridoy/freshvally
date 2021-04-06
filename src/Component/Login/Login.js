import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import { useContext } from "react";
import firebaseConfig from './firebase.config';
import {userContext} from '../../App.js';
import { useHistory, useLocation } from "react-router";
const Login = () => {
    const [loggedInUser, setLogedInUser] = useContext(userContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } }
    const handleGoogleSignin = ()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.initializeApp(firebaseConfig);
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            const {displayName, email} = result.user;
            const signInUser = {name: displayName, email}
            setLogedInUser(signInUser);
            history.replace(from)
            // var credential = result.credential;
            // var token = credential.accessToken;
            // var user = result.user;
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    }
    return (
        <div>
            <button className="logInBtn" onClick={handleGoogleSignin}>Login with google</button>
        </div>
    );
};

export default Login;