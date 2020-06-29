import React, { useState } from 'react'
import './concert-details.css'
import * as concertEventRemote from '../../remotes/event-remote';
import { ConcertEventModel } from '../../data-models/event-model';
import { Band } from '../../data-models/band';



export const ConcertDetailsComponent: React.FC = () => {
    const [name, setName] = useState("Example Concert");
    const [genre, setGenre] = useState('Rock');;
    const [location, setLocation] = useState('Happy Town');
    const [bio, setBio] = useState('description');
    const [concert,setConcert] = useState<ConcertEventModel>();
    const [band, setBands] = useState<Band[]>([]);
    const [image, setImage] = useState<string>();
    
    const eid = localStorage.getItem("eventID");//pulls event id for specific concert from local storage
    if(eid&&!concert){//check to see eid is not null
        setConcert(concertEventRemote.event1[parseInt(eid)]);//pull concert from temp database and set the state
    }    
    if(concert){//set all the states in here
        setName(concert.eName);
        setBands(concert.eBandList);
        setImage(concert.sourceImage)
    }

    
    return (
        
           <div className="concert-details my-container row">
               <div className="col-3 profile-pic">
                   <br></br>
                   <img src={image} />
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