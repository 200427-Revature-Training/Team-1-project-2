import React from 'react'
import { FeedComponent } from '../feed-components/feed-component'

export const ConcertPageComponent: React.FC = () => {

    return (

        <div>
            <br></br>
            <h2>Your upcoming shows!</h2>
            <div className="my-feed-container">
                <div className='row'>

                <FeedComponent upcoming={false} yourShow={true}/>
                <FeedComponent upcoming={false} yourShow={true}/>
                <FeedComponent upcoming={false} yourShow={true}/>
                <FeedComponent upcoming={false} yourShow={true}/>


                </div>


            </div>
        </div>
    )
}
