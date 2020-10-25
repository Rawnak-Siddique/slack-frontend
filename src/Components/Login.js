import React from 'react'
import './Login.css';
import { auth, provider } from './Firebase';
import { Button } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then(result => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        }).catch(error =>{
            alert(error.message);
        });
    };
    
    return (
        <div className="login" >
            <div className="login__container">
                <img src="https://user-images.githubusercontent.com/819186/51553744-4130b580-1e7c-11e9-889e-486937b69475.png" alt="https://user-images.githubusercontent.com/819186/51553744-4130b580-1e7c-11e9-889e-486937b69475.png" />
                <h1>Sign in to my Slack clone</h1>
                <p>Just created a slack clone to show my skills</p>
                <Button onClick={signIn} >Sign In with Google</Button>
            </div>
        </div>
    );
}

export default Login;
