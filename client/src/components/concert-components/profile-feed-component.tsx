import React, { useState } from 'react'
import { FeedComponent } from '../feed-components/feed-component'
import { ConcertEventModel } from '../../data-models/event-model';

const concerts:ConcertEventModel[] = [];

export const ConcertPageComponent: React.FC = () => {
    const [concert, setConcert] = useState<ConcertEventModel[]>(concerts);

    const renderFeedComp = () => {
 

        return concert.map(concertEvent => {
            return (<FeedComponent key={concertEvent.eId} concertEvents={concertEvent} upcoming={true} yourShow={false}></FeedComponent>)
        })
    }
    
    return (

        <div>
            <br></br>
            <h2>Your upcoming shows!</h2>
            <div className="my-feed-container">
                <div className='row'>

                    {renderFeedComp()}


                </div>


            </div>
        </div>
    )
}
