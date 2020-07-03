import React, { useState, useEffect } from 'react'
import './concert-details.css'
import * as concertEventRemote from '../../remotes/event-remote';
import { ConcertDetailsEditComponent } from './concert-details-edit-modal.component';
import { Button } from 'react-bootstrap';
import { RouteComponentProps, withRouter, Route } from 'react-router';

/*
interface ModalComponentsProps {
    states: { modalVisible: boolean;}
    setters: {
        setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    };
    concert:any;
}

interface concertModel {
    name: string,
    date: Date,
    picture: string,
    description: string,
    song:string,
    place : {
        id:number,
        zipCode:number,
        city: string,
        state: string,
        streetAddress:string,
    },
    bands:string
}
*/
 
interface ModalComponentsProps {
     states: { modalVisible: boolean; name: string; date:Date; image:string; description:string; song:string; band:string; city:string; state:string;
                placeId:number; zipcode:number; streetAddress:string; featuredSong:string };
    setters: {
        setModalVisible: React.Dispatch<React.SetStateAction<boolean>>; setName:React.Dispatch<React.SetStateAction<string>>; setDate:React.Dispatch<React.SetStateAction<Date>>;
        setImage:React.Dispatch<React.SetStateAction<string>>; setDescription:React.Dispatch<React.SetStateAction<string>>; setSong:React.Dispatch<React.SetStateAction<string>>;
        setBand:React.Dispatch<React.SetStateAction<string>>; setState:React.Dispatch<React.SetStateAction<string>>; setCity:React.Dispatch<React.SetStateAction<string>>;
        setPlaceId:React.Dispatch<React.SetStateAction<string>>; setZipCode:React.Dispatch<React.SetStateAction<string>>; setStreetAddress:React.Dispatch<React.SetStateAction<string>>;
        setFeaturedSong:React.Dispatch<React.SetStateAction<string>>;
    };
}

export const ConcertDetailsComponent: React.FC<RouteComponentProps> = (props) => {

    const [name, setName] = useState('');
    const [date,setDate]= useState('');
    const [image, setImage]= useState('')
    const [description, setDescription] = useState('');
    const [song,setSong]= useState('');

    const [band, setBand] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');

    const [placeId, setPlaceID] = useState('');
    const [zipcode, setZipCode] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [featuredSong, setFeaturedSong] = useState('');

    const [modalVisible, setModalVisible] = useState(false);

    const [concertModel, setConcertModel] = useState<any>();
 
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
            setBand(response.data.bands);
            const date = new Date(response.data.date)
            setDate(date.toLocaleDateString());
            setPlaceID(response.data.place.placeId);
            setZipCode(response.data.place.zipCode);
            setStreetAddress(response.data.place.streetAddress)
            setFeaturedSong(response.data.featuredSong);
           
           const tempModel =  {
                name: response.data.name,
                date: response.data.date,
                picture: response.data.picture,
                description: response.data.description,
                song:response.data.featuredSong,
                place : {
                    id:response.data.place.id,
                    zipCode:response.data.place.zipcode,
                    city: response.data.place.city,
                    state: response.data.place.state,
                    streetAddress:response.data.place.streetAddress,
                },
                bands:response.data.bands
            }
            console.log('am i temp model' + tempModel);
            setConcertModel(tempModel);
        }
    }

    useEffect(() => {
        getEvent();
    }, []);

    const addManagerButton = () => {
        if (localStorage.getItem('userRoleId') == '4')
        return( <Button className="text-right" onClick={() => setModalVisible(true)}>Edit event</Button>);
    }
    const renderDetailComponent = () => {
        if (concertModel)
        {
            console.log('am i here');
            return (
              <ConcertDetailsEditComponent setters={setters} states={states} concertModel={concertModel}></ConcertDetailsEditComponent>
                 )
        }
    }

    return (
        
           <div className="concert-details my-container row">
            {renderDetailComponent()}
               <div className="col-3 profile-pic">
                   <br></br>
                    <h3>{name}</h3>
                    <img src={image}/>
                </div>
               <div className="col-4">
                   <br></br>
                   <h4>Bands</h4>
                   <ul className="myList">
                        <p>{band}</p>
                   </ul>
                   <h4>Location</h4>
                   <ul className="myList">
                    <p>{city}, {state}</p>
                   </ul>
                   <h4>Description</h4>
                   <ul className="myList">
                       <p>{description}</p>
                   </ul>
                   <h4>Date</h4>
                   <ul>
                       <p>{date}</p>
                   </ul>
                   {addManagerButton()}
               </div>
               <div className="col-5 iframe-container">
                   <br></br>
                
               <iframe className='responsive-iframe' src={song}  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
               </div>
           </div>
           
    )
}

export default withRouter(ConcertDetailsComponent);