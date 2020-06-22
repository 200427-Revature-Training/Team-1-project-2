import React from 'react'
import './feed.css'
import { Button } from 'react-bootstrap'
import { ConcertEventModel } from '../../data-models/event-model';
import * as userRemote from '../../remotes/user-remote';

interface FeedProps{
    upcoming:boolean;
    yourShow:boolean;
    concertEvents:ConcertEventModel;
}

export const FeedComponent: React.FC<FeedProps> = (props) => {

    let addButton = props.upcoming  ?<Button className="btn btn-success" onClick={() => addButtonEvent()}>Add Show</Button>:<span></span>;
    let removeButton = props.yourShow  ?<Button className="btn btn-danger" onClick={() => removeButtonEvent()}>Remove</Button>:<span></span>;

    const addButtonEvent = () => {
        console.log('I am the add button event on feed component add event to my favorites now');
        userRemote.userAddEvent(props.concertEvents.eId);
    }

    const removeButtonEvent = () => {
        console.log('i am the remove button event in feed component remove this event from my favorites now');
        userRemote.userRemoveEvent(props.concertEvents.eId);
    }

    const viewButtonEvent = () => {
        console.log('i am the view button event on feed component');
        
    }

    return (

        <div className="col-4">
            <div className="card" >
                <img className="card-img-top" src={props.concertEvents.sourceImage} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.concertEvents.eName}</h5>
                        <p className="card-text">{props.concertEvents.city}</p>
                        <p className="card-text">{props.concertEvents.state}</p>
                        <Button href="#" className="btn btn-primary">View</Button>
                        {addButton}
                        {removeButton}
                        
                    </div>
            </div>
        </div>
    )
}
