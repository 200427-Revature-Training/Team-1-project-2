import React, { useState, useEffect } from 'react'
import { FeedComponent } from '../feed-components/feed-component'
import './home.css'
import { RouteComponentProps, withRouter } from 'react-router'
import { Button, FormControl, Form } from 'react-bootstrap'
import * as concertEventRemote from '../../remotes/event-remote';
import { NewEventModalComponent } from './new-event-modal';
import { TextField, Select, MenuItem } from '@material-ui/core'

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

const addManageButtons = () => {

    // check authentification and manager role_id
    const userRoleId = localStorage.getItem("userRoleId");
    console.log('whats user id = ' + userRoleId);
    if (userRoleId === '4')
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
        const aState = a.state.toLowerCase();
        const bState = b.state.toLowerCase();
        const bCity = b.city.toLowerCase();
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
        console.log(response.data);
        const city = localStorage.getItem('userCity');
        const state = localStorage.getItem('userState');
        if (city !== null && state !== null) {
            setCitySearch(city);
            setStateSearch(state);
        }
        const con = response.data;
        const fixedDates = con.map(c=>{
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


    const handleSelectState = (event: React.ChangeEvent<{ value: unknown }>) => {
        setStateSearch(event.target.value as string);
        };

    useEffect(() => {
        renderFeedComponents();
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
                        
                            <Select
                                className='removeMargin'
                                value={stateSearch}
                                onChange={handleSelectState}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="" disabled>State</MenuItem>
                                <MenuItem value={'AL'}>Alabama</MenuItem>
                                <MenuItem value={'AK'}>ALaska</MenuItem>
                                <MenuItem value={'AZ'}>Arizona</MenuItem>
                                <MenuItem value={'AR'}>Arkansas</MenuItem>
                                <MenuItem value={'CA'}>California</MenuItem>
                                <MenuItem value={'CO'}>Colorado</MenuItem>
                                <MenuItem value={'CT'}>Connecticut</MenuItem>
                                <MenuItem value={'DC'}>District of Columbia</MenuItem>
                                <MenuItem value={'DE'}>Delaware</MenuItem>
                                <MenuItem value={'FL'}>Florida</MenuItem>
                                <MenuItem value={'GA'}>Georgia</MenuItem>
                                <MenuItem value={'HI'}>Hawaii</MenuItem>
                                <MenuItem value={'ID'}>Idaho</MenuItem>
                                <MenuItem value={'IL'}>Illinois</MenuItem>
                                <MenuItem value={'IN'}>Indiana</MenuItem>
                                <MenuItem value={'IA'}>Iowa</MenuItem>
                                <MenuItem value={'KS'}>Kansas</MenuItem>
                                <MenuItem value={'KY'}>Kentucky</MenuItem>
                                <MenuItem value={'LA'}>Louisiana</MenuItem>
                                <MenuItem value={'ME'}>Maine</MenuItem>
                                <MenuItem value={'MD'}>Maryland</MenuItem>
                                <MenuItem value={'MA'}>Massachusetts</MenuItem>
                                <MenuItem value={'MI'}>Michigan</MenuItem>
                                <MenuItem value={'MN'}>Minnesota</MenuItem>
                                <MenuItem value={'MS'}>Mississippi</MenuItem>
                                <MenuItem value={'MO'}>Missouri</MenuItem>
                                <MenuItem value={'MT'}>Montana</MenuItem>
                                <MenuItem value={'NE'}>Nebraska</MenuItem>
                                <MenuItem value={'NV'}>Nevada</MenuItem>
                                <MenuItem value={'NH'}>New Hampshire</MenuItem>
                                <MenuItem value={'NJ'}>New Jersey</MenuItem>
                                <MenuItem value={'NM'}>New Mexico</MenuItem>
                                <MenuItem value={'NY'}>New York</MenuItem>
                                <MenuItem value={'NC'}>North Carolina</MenuItem>
                                <MenuItem value={'ND'}>North Dakota</MenuItem>
                                <MenuItem value={'OH'}>Ohio</MenuItem>
                                <MenuItem value={'OK'}>Oklahoma</MenuItem>
                                <MenuItem value={'OR'}>Oregon</MenuItem>
                                <MenuItem value={'PA'}>Pennsylvania</MenuItem>
                                <MenuItem value={'RI'}>Rhode Islane</MenuItem>
                                <MenuItem value={'SC'}>South Carolina</MenuItem>
                                <MenuItem value={'SD'}>South Dakota</MenuItem>
                                <MenuItem value={'TN'}>Tennessee</MenuItem>
                                <MenuItem value={'TX'}>Texas</MenuItem>
                                <MenuItem value={'UT'}>Utah</MenuItem>
                                <MenuItem value={'VT'}>Vermont</MenuItem>
                                <MenuItem value={'VA'}>Virginia</MenuItem>
                                <MenuItem value={'WA'}>Washington</MenuItem>
                                <MenuItem value={'WV'}>West Virginia</MenuItem>
                                <MenuItem value={'WI'}>Wisconsin</MenuItem>
                                <MenuItem value={'WY'}>Wyoming</MenuItem>
                            </Select>
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
