import React, { useState } from 'react'
import { FeedComponent } from '../feed-components/feed-component'
import './home.css'
import { ConcertEventModel } from '../../data-models/event-model'
import { RouteComponentProps, withRouter } from 'react-router'
import { Button } from 'react-bootstrap'
import * as concertEventRemote from '../../remotes/event-remote';

const concerts:ConcertEventModel[] = [];

export const HomeComponent: React.FC<RouteComponentProps> = (props) => {

    const [concert, setConcert] = useState<ConcertEventModel[]>(concerts);


    const addConcert = (list: ConcertEventModel) => {
        setConcert([...concert, list])
    }

    const getAllEvents = () => {
        concertEventRemote.getAllEvents().then(con => {
            return setConcert(con);
        })
    }

    const addManageButtons = () => {

        // check authentification and manager role_id
        //if (auth && managerRoleID == 1)
       return  <Button>Add event</Button>
    }

    const renderFeedComponents = () => {

        return concert.sort(sortFx).map(concertEvent => {
            return (<FeedComponent key={concertEvent.eId} concertEvents={concertEvent} upcoming={true} yourShow={false}></FeedComponent>)
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

    // remove this after server is hooked up
    getAllEvents();//**remove this line after server is hooked up */
    return (

        <div>
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