import React from 'react';
import {Link, withRouter, RouteComponentProps} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './header.css';


export const HeaderComponent: React.FC<RouteComponentProps> = (props) => {
  // unused should we delete it?
    const renderOnCurrentPath = (path:string)=>{
        return path === props.location.pathname ?
        <span className="sr-only">(current)</span>:<span></span>
    }
    const logout = ()=>{
        localStorage.clear();
        props.history.push('/login');
    }
    const username = (localStorage.getItem('userName')) ? (localStorage.getItem('userName')) : 'Guest';

    const renderButtons = () => {
        if (username !== 'Guest')
        {
            return (
                <div>
                    <li className="nav-item">
                    <Link className='nav-links' to='/profile'>Your Profile</Link>
                    </li>
                    <li className="nav-item">
                    <Link className='nav-links' to='/concert'>Your Concerts</Link>
                    </li>
                    <li>
                        <Button className='btn-dark nav-btn' onClick={logout}>Logout</Button>
                    </li>
                </div>
            )
        }
        else {
            return (
                <div>
                <li>
                  <Button className='btn-dark nav-btn' onClick={logout}>Login</Button>
               </li>
              </div>
            )
        }
    }
    
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/home">Your Concert Finder</a>
             <h2 className='welcome-text'>Welcome {username}</h2>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className='nav-links' to="/home">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    {renderButtons()}
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(HeaderComponent);