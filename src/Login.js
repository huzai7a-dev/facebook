import { Button } from '@material-ui/core';
import React from 'react';
import './login.css';
import {auth, provider} from './firebase';

function Login(props) {
    const signIn = ()=>{
        auth.signInWithPopup(provider)
        .then(result=>{
            console.log(result.user);
            props.data(result.user);
        }).catch(error =>{
            alert(error.message);
        })
    }
    
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png"
                 alt="facebook logo"
                />

                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/196px-Facebook_Logo_%282019%29.svg.png"
                 alt="facebook text logo"
                />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
