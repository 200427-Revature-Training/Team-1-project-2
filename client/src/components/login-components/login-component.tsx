import React from 'react'

export const LoginComponent: React.FC = () => {

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
        </section>
    )
}
