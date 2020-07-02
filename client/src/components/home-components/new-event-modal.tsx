import { Button, Modal } from 'react-bootstrap';
import React from 'react';
import { TextField, Typography } from '@material-ui/core';
import * as concertEventRemote from '../../remotes/event-remote';
import { Band } from '../../data-models/band';
import { ConcertEventModel } from '../../data-models/event-model';


interface ModalComponents {
    states: { bandModelVisible: boolean; concert: ConcertEventModel[], modalVisible: boolean; concertName: string; concertDate: Date; concertState: string; concertCity: string; concertBands: string; concertImage: string; bandName: string; bandId: number; concertDescription:string };
    setters: {
        setConcertDescription:React.Dispatch<React.SetStateAction<string>>;
        setBandModalVisible: React.Dispatch<React.SetStateAction<boolean>>; setModalVisible: React.Dispatch<React.SetStateAction<boolean>>; setConcertName: React.Dispatch<React.SetStateAction<string>>; setConcertDate: React.Dispatch<React.SetStateAction<Date>>;
        setConcertState: React.Dispatch<React.SetStateAction<string>>; setConcertCity: React.Dispatch<React.SetStateAction<string>>; setConcertBands: React.Dispatch<React.SetStateAction<string>>; setConcertImage: React.Dispatch<React.SetStateAction<string>>;
        setBandName: React.Dispatch<React.SetStateAction<string>>; setBandID: React.Dispatch<React.SetStateAction<number>>;
    };
}

export const NewEventModalComponent: React.FC<ModalComponents> = (props) => {

    const setConcertDateString = (input: string) => {
        const dNow = new Date(input);
        props.setters.setConcertDate(dNow);
    }

    
    const createEventButton = async () => {
        console.log('create the event' + props.states.concert.length);
       
        const payload: ConcertEventModel = {
            eId: 7,// this wil be set by server
            eBandList: props.states.concertBands,
            city: props.states.concertCity,
            state: props.states.concertState,
            sourceImage: props.states.concertImage,
            eName: props.states.concertName,
            eDate: props.states.concertDate,
            description: props.states.concertDescription
        }
 
        concertEventRemote.addConcertEvent(payload);

        //props.states.concertBands.length = 0;

        props.setters.setConcertCity('');
        props.setters.setConcertDate(new Date());
        props.setters.setConcertImage('');
        props.setters.setConcertName('');
        props.setters.setConcertState('');
        props.setters.setConcertDescription('');


        console.log(' am i being clicked');
        props.setters.setModalVisible(false);
    }
 
    const removeBandFromEvent = (bandlist: string) => {

        let newBandList = props.states.concertBands.split(',');
        let trimedList = '';
        for (let i = 0; i < newBandList.length; i++)
        {
            if(bandlist != newBandList[i])
             trimedList = trimedList + ',';
        }
        props.setters.setConcertBands(bandlist);
    }
    
    const addBandToEventHandler = () => {
        // we will need to get all the band info then populate for now i hack it
        //concertEventRemote.();
        const newBand: Band = {
            id: props.states.bandId,
            name: props.states.bandName,
            members: [],
            events: []
        }
        //let arr = props.states.concertBands;
        //arr.push(newBand);
        props.setters.setConcertBands('');

        props.setters.setBandID(0);
        props.setters.setBandName('');
    }
 
    const bandModelEventButton = (shouldShow: boolean) => {
        props.setters.setBandModalVisible(shouldShow);
        props.setters.setModalVisible(!shouldShow);
    }


    const renderBandList = () => {
        const bandArray = props.states.concertBands.split(',');
        let idForKey = 0;
        return bandArray.map(() => {
           return(
           <div key={idForKey}>
                <Typography>

                    {bandArray[idForKey]}
                    <button onClick={() => removeBandFromEvent(bandArray[idForKey])}>Remove</button>
                </Typography>
            </div>
           )
           idForKey++;
        })
    };

    const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            let reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = () => {
                if (typeof reader.result == 'string') {
                    props.setters.setConcertImage(reader.result);
                }
            }


        }
    };

    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setters.setConcertDate(new Date(event.target.value.replace("T","\ ")));
    }

    const date = props.states.concertDate;
    const dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split("T")[0] 
                            + "T" + ("0"+props.states.concertDate.getHours()).slice(-2) + ":" + ("0" + props.states.concertDate.getMinutes()).slice(-2);

    return (
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
                                onChange={(e) => props.setters.setConcertName(e.target.value)}
                            />
                        </div>
                        <div>
                            <TextField
                                id="datetime-local"
                                type="datetime-local"
                                value = {dateString}
                                onChange={handleTimeChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
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
                                onChange={(e) => props.setters.setConcertCity(e.target.value)}
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
                                onChange={(e) => props.setters.setConcertState(e.target.value)}
                            />
                        </div>
                        <div>
                        <label>Concert Picture</label>
                        <br></br>
                        <input type="file" onChange={handleImage} />
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
                                onChange={(e) => props.setters.setBandName(e.target.value)}
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
                                onChange={(e) => props.setters.setBandID(parseInt(e.target.value))}
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
