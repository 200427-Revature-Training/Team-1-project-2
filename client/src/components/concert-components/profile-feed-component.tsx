import React, { useState } from 'react'
import { FeedComponent } from '../feed-components/feed-component'
import { ConcertEventModel } from '../../data-models/event-model';
import * as UserEventRemote from '../../remotes/user-remote';
import { TextField } from '@material-ui/core';

const concerts: ConcertEventModel[] = UserEventRemote.event1;

export const ConcertPageComponent: React.FC = () => {
    const [concert, setConcert] = useState<ConcertEventModel[]>(concerts);

    const [citySearch, setCitySearch] = useState('San Francisco');
    const [stateSearch, setStateSearch] = useState('California');
    const [searchConcertDate, setSearchConcertDate] = useState(new Date());


    const sortFx = (a: ConcertEventModel, b: ConcertEventModel) => {
        const aState = a.state.toLowerCase();
        const bState = b.state.toLowerCase();
        const bCity = b.city.toLowerCase()
        const sSearch = stateSearch.toLowerCase();
        const cSearch = citySearch.toLowerCase();
        if (aState === sSearch) {

            if (bState === sSearch && bCity === cSearch) {
                return 1;
            }
            else {
                return -1;
            }
        } else if (!(bState === sSearch||bCity === cSearch)) {
            return -1;
        }

        else {
            return 0;
        }
    }

    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchConcertDate(new Date(event.target.value.replace("T","\ ")));
    }

    const sortDate = (a: ConcertEventModel, b: ConcertEventModel)=>{
        return a.eDate<b.eDate?1:-1;
    }


    const date = searchConcertDate;
    const dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split("T")[0] 
                            + "T" + ("0"+searchConcertDate.getHours()).slice(-2) + ":" + ("0" + searchConcertDate.getMinutes()).slice(-2);


    const renderFeedComp = () => {

        return concert.filter(concert => concert.eDate >= searchConcertDate).sort(sortDate).sort(sortFx).map(concertEvent => {
            return (<FeedComponent key={concertEvent.eId} concertEvents={concertEvent} homePage={false} yourShow={true}></FeedComponent>)
        })
    }
    
    return (

        <div>
            <br></br>
            <h2>Your upcoming shows!</h2>
            <div className="container feed-container">
                <div className="row">
                    <div className="col-4">

                        <label>Search by State</label>
                        <br></br>
                        <input type="text" value={stateSearch} onChange={(e) => setStateSearch(e.target.value)} />
                    </div>
                    <div className="col-4">
                        <label>Search by City</label>
                        <br></br>
                        <input type="text" value={citySearch} onChange={(e) => setCitySearch(e.target.value)} />
                    </div>
                    <div className="col-4">
                        <label>Showing Concerts After</label>
                        <br></br>
                        <TextField
                            id="datetime-local"
                            type="datetime-local"
                            value={dateString}
                            onChange={handleTimeChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>

                </div>
            </div>
            <div className="my-feed-container">
                <div className='row'>

                    {renderFeedComp()}


                </div>


            </div>
        </div>
    )
}
