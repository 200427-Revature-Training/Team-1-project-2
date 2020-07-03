import React, { useState, useEffect } from 'react'
import { FeedComponent } from '../feed-components/feed-component'
import './home.css'
import { RouteComponentProps, withRouter } from 'react-router'
import { Button } from 'react-bootstrap'
import * as concertEventRemote from '../../remotes/event-remote';
import { NewEventModalComponent } from './new-event-modal';
import { TextField } from '@material-ui/core'

// const concerts: ConcertEventModel[] = [];

export const HomeComponent: React.FC<RouteComponentProps> = (props) => {


    const [concert, setConcerts] = useState<any[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [yourConcert,setYourConcerts]= useState<any[]>([]);
    const [citySearch, setCitySearch] = useState('');
    const [stateSearch, setStateSearch] = useState('');
    const [searchConcertDate, setSearchConcertDate] = useState(new Date());
   
    const states = {
       modalVisible: modalVisible
    }
    const setters = {
      setModalVisible: setModalVisible
    }

    //  const addConcert = (list: ConcertEventModel) => {
    //      setConcerts([...concert, list])
    //  }

/**
    const addEventHandler = async () => {
        const payload: ConcertEventModel = {
            eId: 0,
            city: concertCity,
            state: concertState,
            eBandList: concertBands,
            eDate: concertDate,
            eName: concertName,
            sourceImage: concertImage,
            description: concertDescription
        }
        concertEventRemote.addConcertEvent(payload);
    }
 */
    const addManageButtons = () => {

        // check authentification and manager role_id
        const userId = localStorage.getItem("userId");
        console.log('whats user id = ' + userId);
        if (userId === '4')
            return <Button className="text-right" onClick={() => setModalVisible(true)}>Add event</Button>
    }

    const renderFeedComponents = () => {
        return concert.filter(concert => concert.date >= searchConcertDate).sort(sortDate).sort(sortFx).map(concertEvent => {

            return (<FeedComponent key={concertEvent.id} yourConcert = {yourConcert} concertEvents={concertEvent}></FeedComponent>)
        })
    }

    const sortDate = (a: any, b: any) => {
        return a.date < b.date ? 1 : -1;
    }

    const sortFx = (a: any, b: any) => {
        const aState = a.place.state.toLowerCase();
        const bState = b.place.state.toLowerCase();
        const bCity = b.place.city.toLowerCase();
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

    const getAllEvents = async () => {
        const response = await concertEventRemote.getAllEvents();
        const city = localStorage.getItem('userCity');
        const state = localStorage.getItem('userState');
        if (city !== null && state !== null) {
            setCitySearch(city);
            setStateSearch(state);
        }
        const con = response.data;
        const fixedDates = con.map(c => {
            c.date = new Date(c.date);
            return c;
        })
        setConcerts(fixedDates);
        const id = localStorage.getItem('userId');
        if (id !== null) {
            const data = await concertEventRemote.getEventByUserId(id);
            const ids = data.map(c => {
                return c.id;
            })
            setYourConcerts(ids);
        }
    }

    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchConcertDate(new Date(event.target.value.replace("T", "\ ")));
    }

    const date = searchConcertDate;
    const dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split("T")[0]
        + "T" + ("0" + searchConcertDate.getHours()).slice(-2) + ":" + ("0" + searchConcertDate.getMinutes()).slice(-2);



    useEffect(() => {
        getAllEvents();
    }, []);

    return (

        <div>
            <NewEventModalComponent setters={setters} states={states}></NewEventModalComponent>
            <h2>Upcoming events!</h2>
            <br></br>
            <div className="container feed-container">
                <div className="row">
                    <div className="col-3">

                        <label>Search by State</label>
                        <br></br>
                        <input type="text" value={stateSearch} onChange={(e) => setStateSearch(e.target.value)} />
                    </div>
                    <div className="col-3">
                        <label>Search by City</label>
                        <br></br>
                        <input type="text" value={citySearch} onChange={(e) => setCitySearch(e.target.value)} />
                    </div>
                    <div className="col-3">
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
                    <br></br>
                    <div className="my-feed-container">

                        {addManageButtons()}
                    </div>
                </div>
            </div>
            <br></br>
            <div>
            </div>
            <div className="my-feed-container">
                {renderFeedComponents()}
            </div>


        </div>
    )
}

export default withRouter(HomeComponent);
