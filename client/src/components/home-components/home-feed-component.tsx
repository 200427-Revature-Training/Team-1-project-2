import React, { useState, useEffect } from 'react'
import { FeedComponent } from '../feed-components/feed-component'
import './home.css'
import { ConcertEventModel } from '../../data-models/event-model'
import { RouteComponentProps, withRouter } from 'react-router'
import { Button } from 'react-bootstrap'
import * as concertEventRemote from '../../remotes/event-remote';
import { Band } from '../../data-models/band';
import {NewEventModalComponent} from './new-event-modal';

const concerts:ConcertEventModel[] = [];
let bandsForEvent:Band[] = [{
    id:0,
    name:"team 1",
    members:[],
    events:[]
},
{
    id:1,
    name:"team 2",
    members:[],
    events:[]
}];

export const HomeComponent: React.FC<RouteComponentProps> = (props) => {

    const [bandModelVisible, setBandModalVisible] = useState(false);
    const [concert, setConcerts] = useState<ConcertEventModel[]>(concerts);
    const [modalVisible, setModalVisible] = useState(false);
    const [concertName, setConcertName] = useState('');
    const [concertDate, setConcertDate] = useState(new Date());
    const [concertState, setConcertState] = useState('');
    const [concertCity, setConcertCity] = useState('');
    const [concertBands, setConcertBands] = useState<Band[]>(bandsForEvent);
    const [concertImage, setConcertImage] = useState('');
    const [bandName, setBandName] = useState('');
    const [bandId, setBandID] = useState(0);
    
    const states ={bandModelVisible:bandModelVisible,concert:concert,modalVisible:modalVisible,concertName:concertName,concertDate:concertDate,concertState:concertState,concertCity:concertCity,
                    concertBands:concertBands,concertImage:concertImage,bandName:bandName,bandId:bandId}
    const setters={setBandModalVisible:setBandModalVisible,setModalVisible:setModalVisible,setConcertName:setConcertName,setConcertDate:setConcertDate,setConcertState:setConcertState,
        setConcertCity:setConcertCity,setConcertBands:setConcertBands,setConcertImage:setConcertImage,setBandName:setBandName,setBandID:setBandID}

    //  const addConcert = (list: ConcertEventModel) => {
  //      setConcerts([...concert, list])
  //  }

    const getAllEvents = () => {
        concertEventRemote.getAllEvents().then(con => {
            return setConcerts(con);
        })
    }

    
    const addManageButtons = () => {

        // check authentification and manager role_id
        //if (auth && managerRoleID == 1)
        return  <Button onClick={() => setModalVisible(true)}>Add event</Button>
    }
    
    
    const renderFeedComponents = () => {
        console.log(typeof setters);
        return concert.sort(sortFx).map(concertEvent => {
            return (<FeedComponent key={concertEvent.eId} concertEvents={concertEvent} homePage={true} yourShow={false}></FeedComponent>)
        })
    }
    
    const sortFx = (a:ConcertEventModel,b:ConcertEventModel)=>{
        if (a.state === 'California') {
            
            if (b.state === 'California' && b.city === 'San Diego') {
                return 1;
            }
            else {
                return -1;
            }
        } else if (b.state === 'California') {
            return 1;
        }
        else {
            return 0;
        }
    }
    
    getAllEvents();//**remove this line after server is hooked up */
    
    useEffect(() => {}, []);
    
    return (

        <div>
            <NewEventModalComponent setters={setters} states={states}></NewEventModalComponent>
            <h2>Upcoming events!</h2>
           {addManageButtons()}
            <div className="my-feed-container">
                <div className='row'>
                {renderFeedComponents()}
                </div>
            </div>

           
        </div>
    )
}

export default withRouter(HomeComponent);