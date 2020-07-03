import React, { useState, useEffect } from 'react'
import { FeedComponent } from '../feed-components/feed-component'
import { ConcertEventModel } from '../../data-models/event-model';
import { TextField } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import * as eventRemote from '../../remotes/event-remote';


export const ConcertPageComponent: React.FC = () => {
    
    const [concert, setConcert] = useState<any[]>([]);
    const [citySearch, setCitySearch] = useState('');
    const [stateSearch, setStateSearch] = useState('');
    const [searchConcertDate, setSearchConcertDate] = useState(new Date());


    const sortFx = (a: any, b: any) => {
        const aState = a.place.state.toLowerCase();
        const bState = b.place.state.toLowerCase();
        const bCity = b.place.city.toLowerCase()
        const sSearch = stateSearch.toLowerCase();
        const cSearch = citySearch.toLowerCase();
        if (aState === sSearch) {

            if (bState === sSearch && bCity === cSearch) {
                return 1;
            }
            else {
                return -1;
            }
        } else if (!(bState === sSearch || bCity === cSearch)) {
            return -1;
        }

        else {
            return 0;
        }
    }

    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchConcertDate(new Date(event.target.value.replace("T", "\ ")));
    }

    const sortDate = (a: ConcertEventModel, b: ConcertEventModel) => {
        return a.eDate < b.eDate ? 1 : -1;
    }


    const date = searchConcertDate;
    const dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split("T")[0]
        + "T" + ("0" + searchConcertDate.getHours()).slice(-2) + ":" + ("0" + searchConcertDate.getMinutes()).slice(-2);

    //.filter(concert => concert.eDate >= searchConcertDate)
    const renderFeedComp = () => {
        return concert.map(concertEvent => {
            return (<FeedComponent key={concertEvent.id} concertEvents={concertEvent} homePage={false} yourShow={true}></FeedComponent>)
        })
    }
    const getAllEvents = async () => {
        const city = localStorage.getItem('userCity');
        const state = localStorage.getItem('userState');
        if (city !== null && state !== null) {
            setCitySearch(city);
            setStateSearch(state);
        }
        const id = localStorage.getItem('userId');
        if (id !== null) {
            const data = await eventRemote.getEventByUserId(id);
            const fixedDates = data.map(c => {
                c.date = new Date(c.date);
                return c;
            })
            setConcert(fixedDates);
        }

        /*
        const response = await concertEventRemote.getAllEvents();
        const con = response.data;
        const fixedDates = con.map(c => {
            c.date = new Date(c.date);
            return c;
        })
        setConcerts(fixedDates);
       */
    }

    useEffect(() => {
        getAllEvents();
    }, []);


    if (!localStorage.getItem('userId')) {
        return (<section>
            <h1>Please login to view your Concerts.</h1>
            <Button href="/login">Login</Button>
        </section>)
    } else {

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
}
