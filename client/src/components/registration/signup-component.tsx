import React, { useState } from 'react'

export const SignupComponent: React.FC = () => {

    const [username, setUsername]=useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail]=useState('');
    const [first, setFirst]= useState('');
    const [last, setLast]=useState('')

    return (
        <section>
            <h1>User Registration</h1>
            <div className="col center">
                <div className='container'>
                    <form>
                        <div className='col'>

                        </div>
                        <br></br>
                        <div className='col'>
                            <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username'>
                            </input>
                        </div>
                        <br></br>
                        <div className='col'>
                            <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'>
                            </input>
                        </div>
                        <br></br>
                        <div className='col'>
                            <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'>
                            </input>
                        </div>
                        <br></br>
                        <div className='col'>
                            <input type='text' value={first} onChange={(e)=>setFirst(e.target.value)} placeholder='First Name'>
                            </input>
                        </div>
                        <br></br>
                        <div className='col'>
                            <input type='text' value={last} onChange={(e)=>setLast(e.target.value)} placeholder='Last Name'>
                            </input>
                        </div>
                        <br></br>

                    </form>
                    <button type='submit' >Submit</button>
                    <div></div>
                </div>
            </div>
        </section>
    );
}