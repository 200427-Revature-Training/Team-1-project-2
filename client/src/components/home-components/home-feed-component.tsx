import React from 'react'
import { FeedComponent } from '../feed-components/feed-component'
import './home.css'
export const HomeComponent: React.FC = () => {

    return (

        <div>
            <h2>Upcoming events!</h2>
            <div className="my-feed-container">
                <div className='row'>

                <FeedComponent upcoming={true} yourShow={false}/>
                <FeedComponent upcoming={true} yourShow={false}/>
                <FeedComponent upcoming={true} yourShow={false}/>
                <FeedComponent upcoming={true} yourShow={false}/>
                <FeedComponent upcoming={true} yourShow={false}/>

                </div>


            </div>
        </div>
    )
}
