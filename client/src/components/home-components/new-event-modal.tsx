import { Button, Modal } from 'react-bootstrap';
import React from 'react';
import { TextField, Typography } from '@material-ui/core';
import * as concertEventRemote from '../../remotes/event-remote';
import { Band } from '../../data-models/band';
import { ConcertEventModel } from '../../data-models/event-model';


interface ModalComponents{
    states:{ bandModelVisible: boolean; concert:ConcertEventModel[], modalVisible: boolean; concertName: string; concertDate: Date; concertState: string; concertCity: string; concertBands: Band[]; concertImage: string; bandName: string; bandId: number; };
    setters:any;
}

export const NewEventModalComponent: React.FC<ModalComponents> = (props) => {

    const bandModelEventButton = (shouldShow:boolean) => {
        props.setters.setBandModalVisible(shouldShow);
        props.setters.setModalVisible(!shouldShow);
    }
    const renderBandList = () => {
        return props.states.concertBands.map(ce => (
            <div key={ce.id}>
                <Typography>

                    {ce.name}
                    <button onClick={() => removeBandFromEvent(ce.id)}>Remove</button>
                </Typography>
            </div>
        ))
    }
    const addBandToEventHandler = () => {
        // we will need to get all the band info then populate for now i hack it
        //concertEventRemote.();
        const newBand:Band = {
            id:props.states.bandId,
            name:props.states.bandName,
            members:[],
            events:[]
        }

        props.setters.setConcertBands(props.states.concertBands.push(newBand));

        props.setters.setBandID(0);
        props.setters.setBandName('');
    }
    const removeBandFromEvent = (idToRemove:number) => {

        for(let i =0;i < props.states.concertBands.length; i++)
        {
            if(props.states.concertBands[i].id == idToRemove)
            {
                props.setters.setConcertBands(props.states.concertBands.splice(i, 1));
            }
        }

        // this seams to be doing nothing
        // setConcertBands(props.states.concertBands);

    }
    const createEventButton = () => {
        console.log('create the event' + props.states.concert.length);
        const payload:ConcertEventModel = {
            eId:7,// this wil be set by server
            eBandList:props.states.concertBands,
            city:props.states.concertCity,
            state:props.states.concertState,
            sourceImage:props.states.concertImage,
            eName:props.states.concertName,
            eDate:props.states.concertDate
        }

        props.states.concertBands.length=0;

        props.setters.setConcertCity('');
        props.setters.setConcertDate(new Date());
        props.setters.setConcertImage('');
        props.setters.setConcertName('');
        props.setters.setConcertState('');

        // hack for now remove this and uncomment the lines underneath
        concertEventRemote.addConcertEvent(payload);
      
      //  concertEventRemote.addConcertEvent(payload).then(con => {
       //     return setConcerts(con);
      //  })
    }

    const setConcertDateString = (input:string) => {
        const dNow = new Date(input);
        props.setters.setConcertDate(dNow);
    }


    return(
        <div>
             <Modal show={props.states.modalVisible} onHide={() => props.setters.setModalVisible(false)}>
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
                            autoComplete={props.states.concertName}
                            value={props.states.concertName}
                            autoFocus
                            onChange={(e) => props.setters.setConcertName(e.target.value) }
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
                            autoComplete={props.states.concertDate.toISOString()}
                            value={props.states.concertDate.toDateString()}
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
                            autoComplete={props.states.concertCity}
                            value={props.states.concertCity}
                            autoFocus
                            onChange={(e) => props.setters.setConcertCity(e.target.value) }
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
                            autoComplete={props.states.concertState}
                            value={props.states.concertState}
                            autoFocus
                            onChange={(e) => props.setters.setConcertState(e.target.value) }
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
                            autoComplete={props.states.concertImage}
                            value={props.states.concertImage}
                            autoFocus
                            onChange={(e) => props.setters.setConcertImage(e.target.value) }
                        />
                    </div>
                    </form>
                    <div >
                        <Typography className='band-list'>Band list</Typography>
                     </div>
                      <div>
                            {renderBandList()}
                        </div>
                </Modal.Body>
                <Modal.Footer>
                <button className="btn btn-primary" onClick={() => createEventButton()}>Create Event</button>
                    <Button onClick={() => bandModelEventButton(true)}>Add Band</Button>
                    <Button onClick={() => props.setters.setModalVisible(false)}>Close</Button>
                </Modal.Footer>
            </Modal>


            <Modal show={props.states.bandModelVisible} onHide={() => props.setters.setBandModalVisible(false)}>
                <Modal.Header>
                    <Modal.Title>New Concert Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form>
                    <div >
                    <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="Band Name"
                            label="Band Name"
                            name="Band Name"
                            autoComplete={props.states.bandName}
                            value={props.states.bandName}
                            autoFocus
                            onChange={(e) => props.setters.setBandName(e.target.value) }
                        />
                    </div>
                    <div>
                    <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="Band ID"
                            label="Band ID"
                            name="Band ID"
                            autoComplete={props.states.bandId.toString()}
                            value={props.states.bandId}
                            autoFocus
                            onChange={(e) => props.setters.setBandID(parseInt(e.target.value)) }
                        />
                    </div>

                    </form>
                    <div >
                        <Typography className='band-list'>Band list</Typography>
                        {renderBandList()}
                    </div>
              
                </Modal.Body>
                <Button onClick={() => addBandToEventHandler()}>Add Band to Event</Button>
                <Modal.Footer>
  
                    <Button onClick={() => bandModelEventButton(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
