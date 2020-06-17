import React, { useState } from 'react';
import { Redirect, RouteComponentProps, withRouter } from 'react-router';
import './login-page.css'


export const LoginComponent: React.FC<RouteComponentProps> = (props) => {

    let history = props.history;
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    

        //logs the user in


        //if the user somehow landed on the login screen and already has a valid role, redirect them to the landing page

    

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
                    <button type='submit' >Login</button>
                </div>
            </div>
        </section>)
}

export default withRouter(LoginComponent);