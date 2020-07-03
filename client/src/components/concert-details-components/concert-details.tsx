import React, { useState, useEffect } from 'react'
import './concert-details.css'
import * as concertEventRemote from '../../remotes/event-remote';
import { ConcertDetailsEditComponent } from './concert-details-edit-modal.component';
import { Button } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router';

interface ModalComponents {
    states: { modalVisible: boolean; };
    setters: {
        setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    };
    concertModel:   {
        name: string,
        date: Date,
        picture: string,
        description: string,
        song: string,
        place: {
            id: number,
            zipCode: number,
            state: string,
            city: string,
            streetAddress: string
        },
        bands: string
    }
}


export const ConcertDetailsComponent: React.FC<ModalComponents & RouteComponentProps> = (props) => {
    const [name, setName] = useState('');
    const [band, setBand] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [Description, setDescription] = useState('');
    const [image, setImage]= useState('')
    const [date,setDate]= useState('');
    const [song,setSong]= useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const states = {
        modalVisible: modalVisible
     }
     const setters = {
       setModalVisible: setModalVisible
     }

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
            <ConcertDetailsEditComponent setters={setters} states={states} concertModel={props.concertModel}></ConcertDetailsEditComponent>
               <div className="col-3 profile-pic">
                   <br></br>
                    <h3>{name}</h3>
                    <img src={image}/>
                </div>
               <div className="col-4">
                   <br></br>
                   <h4>Genre</h4>
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
                   <Button className="text-right" onClick={() => setModalVisible(true)}>Edit event</Button>
               </div>
               <div className="col-5 iframe-container">
                   <br></br>
                
               <iframe className='responsive-iframe' src={song}  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
               </div>
           </div>
           
    )
}