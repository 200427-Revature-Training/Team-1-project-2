import React, { useState } from 'react'
import { FeedComponent } from '../feed-components/feed-component'
import './home.css'
import { ConcertEventModel } from '../../data-models/event-model'
import { RouteComponentProps, withRouter } from 'react-router'
import { Button, Modal, Form } from 'react-bootstrap'
import * as concertEventRemote from '../../remotes/event-remote';
import { Band } from '../../data-models/band';
import { TextField, Typography } from '@material-ui/core';

const concerts:ConcertEventModel[] = [];
let bandsForEvent:Band[] = [{
    id:0,
    name:"team 1",
    members:[],
    events:[]
},
{
    id:1,
    name:"team 2",
    members:[],
    events:[]
}];

export const HomeComponent: React.FC<RouteComponentProps> = (props) => {

    const [bandModelVisible, setBandModalVisible] = useState(false);
    const [concert, setConcert] = useState<ConcertEventModel[]>(concerts);
    const [modalVisible, setModalVisible] = useState(false);
    const [concertName, setConcertName] = useState('');
    const [concertDate, setConcertDate] = useState(new Date());
    const [concertState, setConcertState] = useState('');
    const [concertCity, setConcertCity] = useState('');
    const [concertBands, setConcertBands] = useState<Band[]>(bandsForEvent);
    const [concertImage, setConcertImage] = useState('');

    const [bandName, setBandName] = useState('');
    const [bandId, setBandID] = useState(0);

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
       return  <Button onClick={() => setModalVisible(true)}>Add event</Button>
    }

    const setConcertDateString = (input:string) => {

        const dNow = new Date(input);
       // setConcertDate(dNow);
    }

    const createEventButton = () => {
        console.log('create the event');
        const payload:ConcertEventModel = {
            eId:0,
            eBandList:[],
            city:'fresno',
            state:'california',
            sourceImage:'',
            eName:'Marshmellow Roast',
            eDate:new Date()
        }

        concertEventRemote.addConcertEvent(payload).then(con => {
            return setConcert(con);
        })
    }

    const removeBandFromEvent = () => {

    }

    const addBandToEventHandler = () => {
        // we will need to get all the band info then populate for now i hack it
        //concertEventRemote.();
        const newBand:Band = {
            id:bandId,
            name:bandName,
            members:[],
            events:[]
        }

        bandsForEvent.push(newBand)
    }

    const bandModelEventButton = (shouldShow:boolean) => {
        setBandModalVisible(shouldShow);
        setModalVisible(!shouldShow);
    }

    const renderBandList = () => {
        return concertBands.map(ce => {
        return         (           
            <div key={ce.id}>
                <Typography >
                    {ce.name} 
                    <button onClick={() => removeBandFromEvent()}>Remove</button>
                    </Typography>
                    </div>
                    
        )
    })
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

            <Modal show={modalVisible} onHide={() => setModalVisible(false)}>
                <Modal.Header>
                    <Modal.Title>New Concert Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form>
                    <div>
                    <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="Name"
                            label="Name Of Event"
                            name="Name"
                            autoComplete={concertName}
                            value={concertName}
                            autoFocus
                            onChange={(e) => setConcertName(e.target.value) }
                        />
                    </div>
                    <div>
                    <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="Date"
                            label="Date of Event"
                            name="Date Of Event"
                            autoComplete={concertDate.toISOString()}
                            value={concertDate.toDateString()}
                            autoFocus
                            typeof='Date'
                            onChange={(e) => setConcertDateString(e.target.value) }
                        />
                    </div>
                    <div>
                    <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="city"
                            label="City"
                            name="city"
                            autoComplete={concertCity}
                            value={concertCity}
                            autoFocus
                            onChange={(e) => setConcertCity(e.target.value) }
                        />
                    </div>
                    <div>
                    <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="amount"
                            label="State"
                            name="state"
                            autoComplete={concertState}
                            value={concertState}
                            autoFocus
                            onChange={(e) => setConcertState(e.target.value) }
                        />
                    </div>
                    <div>
                    <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="Image"
                            label="Image"
                            name="image"
                            autoComplete={concertImage}
                            value={concertImage}
                            autoFocus
                            onChange={(e) => setConcertImage(e.target.value) }
                        />
                    </div>
                    </form>
                    <div>
                        <Typography>Band list</Typography>
                        {renderBandList()}
                        </div>
                    <button type="submit" className="btn btn-primary" onClick={() => createEventButton()}>Submit</button>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => bandModelEventButton(true)}>Add Band</Button>
                    <Button onClick={() => setModalVisible(false)}>Close</Button>
                </Modal.Footer>
            </Modal>





            <Modal show={bandModelVisible} onHide={() => setBandModalVisible(false)}>
                <Modal.Header>
                    <Modal.Title>New Concert Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form>
                    <div>
                    <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="Band Name"
                            label="Band Name"
                            name="Band Name"
                            autoComplete={bandName}
                            value={bandName}
                            autoFocus
                            onChange={(e) => setBandName(e.target.value) }
                        />
                    </div>

                    </form>
                    <div>
                        <Typography>Band list</Typography>
                        {renderBandList()}
                        </div>
                        <Button onClick={() => addBandToEventHandler()}>Add Band to Event</Button>
                </Modal.Body>
                <Modal.Footer>
  
                    <Button onClick={() => bandModelEventButton(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default withRouter(HomeComponent);


//                    <div className="form-group">
//<label className="control-label">Date</label>
//<input className="form-control" id="date" name="date" placeholder="MM/DD/YYY" type="text"/>
//</div>