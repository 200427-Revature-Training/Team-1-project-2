import React from 'react'
import './feed.css'
import { Button } from 'react-bootstrap'

interface FeedProps{
    upcoming:boolean;
    yourShow:boolean;
}

export const FeedComponent: React.FC<FeedProps> = (props) => {

    let addButton = props.upcoming  ?<Button className="btn btn-success" >Add Show</Button>:<span></span>;
    let removeButton = props.yourShow  ?<Button className="btn btn-danger" >Remove</Button>:<span></span>;


    return (

        <div className="col-4">
            <div className="card" >
                <img className="card-img-top" src="https://static.billboard.com/files/media/concert-crowd-audience-stock-2019-u-billboard-1548-compressed.jpg" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Concert name/band names</h5>
                        <p className="card-text">Event location</p>
                        <Button href="#" className="btn btn-primary">View</Button>
                        {addButton}
                        {removeButton}
                        
                    </div>
            </div>
        </div>
    )
}
