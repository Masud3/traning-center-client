import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
import firebaseConfig from './firebase.config';
import loginBg from '../../../image/loginBg.jpg';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const {from} = location.state || {from: {pathname: "/"}};

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result){
            const {displayName, email } = result.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
            history.replace(from);
        }).catch(function (error){
            const errorMessage = error.message;
        });
    }

    return (
        <div className="login-page container">
            <div className="row align-items-center" style={{height:'100vh'}}>
                <div className="col-md-6 shadow p-5">
                    <div className="form-group">
                        <label htmlFor="">User Name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="text-danger">Forgot you password</label>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-grad" onClick={handleGoogleSignIn}>Google Sign In</button>
                    </div>
                </div>
                <div className="col-md-6 d-none d-md-block align-self-snd">
                    <img className="img-fluid" src={loginBg} alt=""/>
                </div>

            </div>
        </div>
    );
};

export default Login;