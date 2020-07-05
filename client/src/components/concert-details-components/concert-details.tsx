import React, { useState, useEffect } from 'react'
import './concert-details.css'
import * as concertEventRemote from '../../remotes/event-remote';
import { ConcertDetailsEditComponent } from './concert-details-edit-modal.component';
import { Button } from 'react-bootstrap';
import { RouteComponentProps, withRouter } from 'react-router';
 
interface ModalComponentsProps {
     states: { modalVisible: boolean; };
    setters: {
        setModalVisible: React.Dispatch<React.SetStateAction<boolean>>; 
    };
}

export const ConcertDetailsComponent: React.FC<RouteComponentProps> = (props) => {

    const [name, setName] = useState('');
    const [concertDate, setDate] = useState('');
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('');
    const [song,setSong] = useState('');
    const [nameLst, setNameLst] = useState([]);
    const [band, setBand] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');


    const [modalVisible, setModalVisible] = useState(false);

    const [concertModel, setConcertModel] = useState<any>();
 
    const states = {
        modalVisible: modalVisible, name:name, concertDate:concertDate, image:image, description:description,
        song:song, band:band, state:state, city:city
     }
     const setters = {
       setModalVisible: setModalVisible, setName:setName, setDate:setDate, setDescription:setDescription,
       setSong:setSong, setBand:setBand, setState:setState,setCity:setCity
     }
    
     
     const getEvent = async () =>{
        
        const eid = localStorage.getItem("eventID");//pulls event id for specific concert from local storage

        if(eid){

            const response = await concertEventRemote.getEventById(eid)
            setName(response.data.name);
            setDescription(response.data.description);
            setCity(response.data.city);
            setState(response.data.state)
            setImage(response.data.picture);
            setBand(response.data.bands);
            const date = new Date(response.data.date)
            setDate(date.toLocaleDateString());
            if (response.data.song)
            {
                if ( response.data.song.includes('watch')) {
                const str = response.data.song.split("=");
                const embed = "https://www.youtube.com/embed/" + str[1];
                setSong(embed);
            
                }else if(response.data.song.includes('embed')){
                    setSong(response.data.song);
                }
                else {
                    const str = response.data.song.split("e/");
                    const embed = "https://www.youtube.com/embed/" + str[1];
                    setSong(embed);
                }
            }
           
           const tempModel =  {
                id:response.data.id,
                name: response.data.name,
                date: response.data.date,
                picture: response.data.picture,
                description: response.data.description,
                song:response.data.featuredSong,
                city:response.data.city,
                state:response.data.state,
                bands:response.data.bands
            }
            
            setConcertModel(tempModel);
            const eidNum = +eid;
            const data = await concertEventRemote.getUsersByEvent(eidNum);
            const nameList = data.map(u=>{
                return u.first_name +' '+u.last_name})
            setNameLst(nameList);
            }
    }

    const renderWhosGoing = () => {
        let keyId = 0;
            return (
            <ul className="myList">
                {nameLst.map(name=>
                {
                    return (
                        <li key={keyId++}>{name}</li>
                     );
                    })}
            </ul>
     )
    }
    useEffect(() => {
        getEvent();
    }, []);

    const addManagerButton = () => {
        if (localStorage.getItem('userRoleId') === '4')
        return( <Button className="text-right" onClick={() => setModalVisible(true)}>Edit event</Button>);
    }
    const renderDetailComponent = () => {
        if (concertModel)
        {
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
                    <img src={image} alt="about event"/>
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
                       <p>{concertDate}</p>
                   </ul>
                   <h4>Who's going? </h4>
                        {renderWhosGoing()}
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