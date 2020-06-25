import React, { useState } from 'react'
import './concert-details.css'
import { Button, Modal, Form } from 'react-bootstrap'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';
import { Band } from '../../data-models/band';

export const ConcertDetailsComponent: React.FC = () => {
    const [name, setName] = useState("Example Concert");
    const [genre, setGenre] = useState('Rock');
    const [band, setBand] = useState('Rolling Stones');
    const [location, setLocation] = useState('Happy Town');
    const [bio, setBio] = useState('description');

    const states = {name:name, genre:genre, band:band, location:location};
    const setters ={setName:setName,setGenre:setGenre,setBio:setBio};
    

    return (
        
           <div className="concert-details row">
               <div className="col-3 profile-pic">
                   <br></br>
                    <h3>{name}</h3>
                </div>
               <div className="col-4">
                   <br></br>
                   <h4>Genre</h4>
                   <ul className="myList">
                       <li>{genre}</li>
                   </ul>
                   <h4>Band</h4>
                   <ul className="myList">
                        <p>{band}</p>
                   </ul>
                   <h4>Location</h4>
                   <ul className="myList">
                    <p>{location}</p>
                   </ul>
                   <h4>Bio</h4>
                   <ul className="myList">
                       <p>{bio}</p>
                   </ul>
               </div>
               <div className="col-5 iframe-container">
                   <br></br>
                
               <iframe className='responsive-iframe' src="https://www.youtube.com/embed/kfORcR2VSbc"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
               </div>
           </div>
           
    )
}