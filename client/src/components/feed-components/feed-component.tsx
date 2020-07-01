import React, { useState, useEffect } from 'react'
import './feed.css'
import { Button } from 'react-bootstrap'
import { ConcertEventModel } from '../../data-models/event-model';
import * as userRemote from '../../remotes/user-remote';
import { Redirect } from 'react-router';

interface FeedProps {
    homePage: boolean;
    yourShow: boolean;
    concertEvents: any;
}

export const FeedComponent: React.FC<FeedProps> = (props) => {

    useEffect(() => {
       // addButtonEvent();
      //  removeButtonEvent();
    }, []);

    const addButtonEvent = () => {
        console.log('I am the add button event on feed component add event to my favorites now');
        userRemote.userAddEvent(props.concertEvents.eId);
    }

    const removeButtonEvent = () => {
        console.log('i am the remove button event in feed component remove this event from my favorites now');
        userRemote.userRemoveEvent(props.concertEvents.eId);
    }

    const [redirect, setRedirect] = useState(false);

    const handleClick = () => {
        localStorage.setItem('eventID',props.concertEvents.eId+'');
        //set concert id in local storage then...
        setRedirect(true);
    }

    const addConcertToList = () => {

    }

    const removeConcerFromList = () => {

    }
    
    const renderButtons = () => {
       if(localStorage.getItem('userName'))
        {
            if(props.yourShow){
                return (
                    <div>
                        <Button className="btn btn-danger" onClick={() => removeConcerFromList()}>Remove</Button>
                    </div>
                )
            }else
            {
                return(
                <div>
                <Button className="btn btn-success" onClick={() => addConcertToList()}>Add Show</Button>
                 </div>
                )
            }
        }
    }
    /*const renderBands = () => {
        console.log ('bands length = ' + props.concertEvents.eBandList.length);
            return props.concertEvents.eBandList.map(bList => {
            return <p className="card-text">Band name = {bList.name}</p>
            })
    }
*/
    if (redirect) {
        return <Redirect to='concert/details/' />
    }
    else {
        return (
            <div className="col-4">
                <div className="card feed-card" >
                    <img onClick={handleClick} className="card-img-top" src={props.concertEvents.picture} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{props.concertEvents.name}</h5>
                        <p className="card-text">{props.concertEvents.place.city}</p>
                        <p className="card-text">{props.concertEvents.place.state}</p>
                        <p className="card-text">{props.concertEvents.date.toLocaleDateString()}</p>
                        <div>
                        </div>
                    </div>
                </div>
                <div>
                    <Button onClick={handleClick} className="btn btn-primary">View</Button>
                    {renderButtons()}
                </div>
            </div>
        )
    }
}

