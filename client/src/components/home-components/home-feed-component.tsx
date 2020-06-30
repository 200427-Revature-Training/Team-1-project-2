import React, { useState, useEffect } from 'react'
import { FeedComponent } from '../feed-components/feed-component'
import './home.css'
import { ConcertEventModel } from '../../data-models/event-model'
import { RouteComponentProps, withRouter } from 'react-router'
import { Button } from 'react-bootstrap'
import * as concertEventRemote from '../../remotes/event-remote';
import { Band } from '../../data-models/band';
import { NewEventModalComponent } from './new-event-modal';
import { TextField } from '@material-ui/core'

const concerts: ConcertEventModel[] = [];
let bandsForEvent: Band[] = [{
    id: 0,
    name: "team 1",
    members: [],
    events: []
},
{
    id: 1,
    name: "team 2",
    members: [],
    events: []
}];

export const HomeComponent: React.FC<RouteComponentProps> = (props) => {

    const [bandModelVisible, setBandModalVisible] = useState(false);
    const [concert, setConcerts] = useState<any[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [concertName, setConcertName] = useState('');
    const [concertDate, setConcertDate] = useState(new Date());
    const [concertState, setConcertState] = useState('');
    const [concertCity, setConcertCity] = useState('');
    const [concertBands, setConcertBands] = useState<Band[]>([]);
    const [concertImage, setConcertImage] = useState('');
    const [bandName, setBandName] = useState('');
    const [bandId, setBandID] = useState(0);

    const [citySearch, setCitySearch] = useState('');
    const [stateSearch, setStateSearch] = useState('');
    const [searchConcertDate, setSearchConcertDate] = useState(new Date());
    const states = {
        bandModelVisible: bandModelVisible, concert: concert, modalVisible: modalVisible, concertName: concertName, concertDate: concertDate, concertState: concertState, concertCity: concertCity,
        concertBands: concertBands, concertImage: concertImage, bandName: bandName, bandId: bandId
    }
    const setters = {
        setBandModalVisible: setBandModalVisible, setModalVisible: setModalVisible, setConcertName: setConcertName, setConcertDate: setConcertDate, setConcertState: setConcertState,
        setConcertCity: setConcertCity, setConcertBands: setConcertBands, setConcertImage: setConcertImage, setBandName: setBandName, setBandID: setBandID
    }

    //  const addConcert = (list: ConcertEventModel) => {
    //      setConcerts([...concert, list])
    //  }


    const addManageButtons = () => {

        // check authentification and manager role_id
        const userId = localStorage.getItem("userId");
        if (userId === '4')
            return <Button className="text-right" onClick={() => setModalVisible(true)}>Add event</Button>
    }

    //
    const renderFeedComponents = () => {
        return concert.filter(concert => concert.date >= searchConcertDate).sort(sortDate).sort(sortFx).map(concertEvent => {
            //concertEvent.date= new Date(concertEvent.date)
            return (<FeedComponent key={concertEvent.id} concertEvents={concertEvent} homePage={true} yourShow={false}></FeedComponent>)
        })
    }
    
    const sortDate = (a: any, b: any) => {
        return a.eDate < b.eDate ? 1 : -1;
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
        const con = response.data;
        const fixedDates = con.map(c=>{
            c.date = new Date(c.date);
            return c;
        })
        setConcerts(fixedDates);

    }

    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchConcertDate(new Date(event.target.value.replace("T", "\ ")));
    }

    const date = searchConcertDate;
    const dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split("T")[0]
        + "T" + ("0" + searchConcertDate.getHours()).slice(-2) + ":" + ("0" + searchConcertDate.getMinutes()).slice(-2);


    //  getAllEvents();//**remove this line after server is hooked up */

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
                    <div className="text-right col-3">
                        <br></br>
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