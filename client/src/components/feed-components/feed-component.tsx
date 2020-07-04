import React, { useState, useEffect } from 'react'
import './feed.css'
import { Button } from 'react-bootstrap'
import * as eventRemote from '../../remotes/event-remote'
import { Redirect } from 'react-router';

interface FeedProps {
    concertEvents: any;
    yourConcert: any;
}

export const FeedComponent: React.FC<FeedProps> = (props) => {

    useEffect(() => {
    }, []);

    const [redirect, setRedirect] = useState(false);

    const handleClick = () => {
        localStorage.setItem('eventID', props.concertEvents.id + '');
        //set concert id in local storage then...
        setRedirect(true);
    }

    const addConcertToList = async () => {
        const uid = localStorage.getItem('userId');
        const eid = props.concertEvents.id;
        if (uid !== null) {
            const uidStr: number = +uid;
             await eventRemote.addUserEvent(uidStr, eid);
            window.location.reload();
        }
    }

    const removeConcerFromList = async () => {
        const uid = localStorage.getItem('userId');
        const eid = props.concertEvents.id;
        if (uid !== null) {
            const uidStr: number = +uid;
             await eventRemote.removeUserEvent(uidStr, eid);
            window.location.reload();
        }
    }

    const renderButtons = () => {
        if (localStorage.getItem('userName')) {

            if (props.yourConcert.includes(props.concertEvents.id)) {
                return <Button className="btn btn-danger" onClick={() => removeConcerFromList()}>Remove</Button>
            } else {
                return <Button className="btn btn-success" onClick={() => addConcertToList()}>Add Show</Button>
            }
        }
    }

    if (redirect) {
        return <Redirect to='concert/details/' />
    }
    else {
        return (
            <div className="col-4">
                <div className="card feed-card" >
                    <img onClick={handleClick} className="card-img-top" src={props.concertEvents.picture} alt="Card caption" />
                    <div className="card-body">
                        <h5 className="card-title">{props.concertEvents.name}</h5>
                        <p className="card-text">{props.concertEvents.city}, {props.concertEvents.state}</p>
                        <p className="card-text">{props.concertEvents.description}</p>
                        <p className="card-text">Bands preforming: {props.concertEvents.bands}</p>
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

