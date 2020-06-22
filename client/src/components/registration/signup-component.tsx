import React from 'react'

export const SignupComponent: React.FC = () => {

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
                            <input type='text'  placeholder='Username'>
                            </input>
                        </div>
                        <br></br>
                        <div className='col'>
                            <input type='password'   placeholder='Password'>
                            </input>
                        </div>
                        <br></br>
                        <div className='col'>
                            <input type='text'  placeholder='Email'>
                            </input>
                        </div>
                        <br></br>
                        <div className='col'>
                            <input type='text'  placeholder='First Name'>
                            </input>
                        </div>
                        <br></br>
                        <div className='col'>
                            <input type='text'  placeholder='Last Name'>
                            </input>
                        </div>
                        <br></br>
                        <div className='col'>
                            <h5>Profile Picture</h5>
                            <div></div>
                            <input type='file'  >
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