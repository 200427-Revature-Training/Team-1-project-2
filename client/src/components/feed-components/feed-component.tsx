import React from 'react'
import './feed.css'
import { Button } from 'react-bootstrap'
import { ConcertEventModel } from '../../data-models/event-model';

interface FeedProps{
    upcoming:boolean;
    yourShow:boolean;
    concertEvents:ConcertEventModel;
}

export const FeedComponent: React.FC<FeedProps> = (props) => {

    let addButton = props.upcoming  ?<Button className="btn btn-success" >Add Show</Button>:<span></span>;
    let removeButton = props.yourShow  ?<Button className="btn btn-danger" >Remove</Button>:<span></span>;


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
