import React, { useState, useEffect } from 'react'
import './concert-details.css'
import * as concertEventRemote from '../../remotes/event-remote';



export const ConcertDetailsComponent: React.FC = () => {
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [band, setBand] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [Description, setDescription] = useState('');
    const [image, setImage]= useState('')
    const [date,setDate]= useState('');
    const [song,setSong]= useState('');


    const getEvent = async () =>{
        
        const eid = localStorage.getItem("eventID");//pulls event id for specific concert from local storage

        console.log(eid);
        if(eid){

            const response = await concertEventRemote.getEventById(eid)
            console.log(response.data);
            setName(response.data.name);
            setDescription(response.data.description);
            setCity(response.data.place.city);
            setState(response.data.place.state)
            setImage(response.data.picture);
            const date = new Date(response.data.date)
            setDate(date.toLocaleDateString());
            
        }
        
    }
    useEffect(() => {
        getEvent();
    }, []);
    return (
        
           <div className="concert-details my-container row">
               <div className="col-3 profile-pic">
                   <br></br>
                    <h3>{name}</h3>
                    <img src={image}/>
                </div>
               <div className="col-4">
                   <br></br>
                   <h4>Genre</h4>
                   <ul className="myList">
                       <p>{genre}</p>
                   </ul>
                   <h4>Band</h4>
                   <ul className="myList">
                        <p>{band}</p>
                   </ul>
                   <h4>Location</h4>
                   <ul className="myList">
                    <p>{city}, {state}</p>
                   </ul>
                   <h4>Description</h4>
                   <ul className="myList">
                       <p>{Description}</p>
                   </ul>
                   <h4>Date</h4>
                   <ul>
                       <p>{date}</p>
                   </ul>
               </div>
               <div className="col-5 iframe-container">
                   <br></br>
                
               <iframe className='responsive-iframe' src={song}  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
               </div>
           </div>
           
    )
}