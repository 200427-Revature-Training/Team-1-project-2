import React, { useState } from 'react';
import {  RouteComponentProps, withRouter } from 'react-router';
import './login-page.css'
import { Link } from 'react-router-dom';
import * as userRemote from '../../remotes/user-remote';

export const LoginComponent: React.FC<RouteComponentProps> = (props) => {

    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

        //logs the user in
    const signIn = async () => {
        if(username.length < 1 || password.length < 1)
            return;

        const payload = {userName: username, password: password};

        userRemote.login(payload).then(() => {
                if(localStorage.getItem('userId'))
                    props.history.push('/home');
        })    
    }

    return (

        <section>
            <h1>Your Concert Finder</h1>
            <div className="col center">
                <div className='container'>
                    <form>
                        <div className='col'>

                        </div>
                        <br></br>
                        <div className='col'>
                            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username'>
                            </input>
                        </div>
                        <br></br>
                        <div className='col'>
                            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'>
                            </input>
                        </div>
                        <br></br>
                    </form>
                    <button type='submit' onClick={() => signIn()}>Login</button>
                    <br></br>
                    <Link to='/signup'>Signup</Link>
                </div>
            </div>
        </section>
    )
}

export default withRouter(LoginComponent);