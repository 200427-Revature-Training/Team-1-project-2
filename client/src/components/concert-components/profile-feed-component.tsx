import React, { useState } from 'react'
import { FeedComponent } from '../feed-components/feed-component'
import { ConcertEventModel } from '../../data-models/event-model';
import * as UserEventRemote from '../../remotes/user-remote';

const concerts: ConcertEventModel[] = UserEventRemote.event1;

export const ConcertPageComponent: React.FC = () => {
    const [concert, setConcert] = useState<ConcertEventModel[]>(concerts);


    const sortFx = (a: ConcertEventModel, b: ConcertEventModel) => {
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


    const renderFeedComp = () => {

        return concert.sort(sortFx).map(concertEvent => {
            return (<FeedComponent key={concertEvent.eId} concertEvents={concertEvent} homePage={false} yourShow={true}></FeedComponent>)
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
