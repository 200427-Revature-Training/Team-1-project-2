import { Button, Modal } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { TextField, MenuItem, Select } from '@material-ui/core';
import * as concertEventRemote from '../../remotes/event-remote';

interface ModalComponents {
    states: any;
    setters: any;
     concertModel: {
         id:number,
        name: string,
        date: Date,
        picture: string,
        description: string,
        song:string,
        city: string,
        state: string,
        bands:string
    }
}

export const ConcertDetailsEditComponent: React.FC<ModalComponents> = (props) => {

    const [shouldSetState, setShouldSetState] = useState(false);
    const [concertDate, setConcertDate] = useState(new Date());
    
    const createEventButton = async () => {
       
    const datetoSend = (shouldSetState) ?  concertDate : props.states.concertDate;

    setShouldSetState(false);
    const payload: any = {
        id:props.concertModel.id,
        eName: props.states.name,
        eDate:datetoSend,
        sourceImage: props.states.image,
        description: props.states.description,
        song: props.states.song,
        city: props.states.city,
        state: props.states.state,
        eBandList: props.states.band
    }
 
        concertEventRemote.updateConcertEvent(payload);

        props.setters.setModalVisible(false);
    }

    const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            let reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = () => {
                if (typeof reader.result == 'string') {
                    props.setters.setImage(reader.result);
                }
            }
        }
    };

    const handleSelectState = (event: React.ChangeEvent<{ value: unknown }>) => {
        props.setters.setState(event.target.value as string);
        };

    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShouldSetState(true);
        setConcertDate(new Date(event.target.value.replace("T",'\ ')));
        props.setters.setDate((event.target.value.replace("T",'\ ')))
     
    }
    
 useEffect(() => {
        
}, []);

    return (
        <div>
            <Modal show={props.states.modalVisible} onHide={() => props.setters.setModalVisible(false)}>
                <Modal.Header>
                    <Modal.Title>Concert Event</Modal.Title>
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
                                autoComplete={props.states.name}
                                value={props.states.name}
                                autoFocus
                                onChange={(e) => props.setters.setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="Description"
                                label="Description"
                                name="Description"
                                autoComplete={props.states.description}
                                value={props.states.description}
                                autoFocus
                                onChange={(e) => props.setters.setDescription(e.target.value)}
                            />
                        </div>
                        <div>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="Bands"
                                label="Bands"
                                name="Bands"
                                autoComplete={props.states.band}
                                value={props.states.band}
                                autoFocus
                               onChange={(e) => props.setters.setBand(e.target.value)}
                            />
                        </div>
                        <div>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="Featured Song"
                                label="Featured Song"
                                name="Featured Song"
                                autoComplete={props.states.featuredSong}
                                value={props.states.featuredSong}
                                autoFocus
                                onChange={(e) => props.setters.setSong(e.target.value)}
                            />
                        </div>
                        <div>
                            <TextField
                                id="datetime-local"
                                type="datetime-local"
                       
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
                                onChange={(e) => props.setters.setCity(e.target.value)}
                            />
                        </div>
                        <div>
                    <div className="col-3">
                        <br></br>
                                    <Select
                                        className='removeMargin'
                                        value={props.states.concertState}
                                        onChange={(handleSelectState)}
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
                            <br></br>
                        </div>
                        <div>
                        <label>Concert Picture</label>
                        <br></br>
                        <input type="file" onChange={handleImage} />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-primary" onClick={() => createEventButton()}>Update Event</button>
                
                    <Button onClick={() => props.setters.setModalVisible(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
