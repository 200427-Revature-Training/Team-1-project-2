import { Button, Modal } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import * as concertEventRemote from '../../remotes/event-remote';


interface ModalComponents {
    states: { modalVisible: boolean; };
    setters: {
        setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    };
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

    const [concertName, setConcertName] = useState(props.concertModel.name);
    const [concertDate, setConcertDate] = useState(new Date());
    const [concertState, setConcertState] = useState(props.concertModel.state);
    const [concertCity, setConcertCity] = useState(props.concertModel.city);
    const [concertImage, setConcertImage] = useState(props.concertModel.picture);
    const [bandName, setBandName] = useState(props.concertModel.bands);
    const [concertDescription, setConcertDescription] = useState(props.concertModel.description);
    const [featuredSong, setFeaturedSong] = useState(props.concertModel.song);

    const createEventButton = async () => {
       
        const payload: any = {
            id:props.concertModel.id,
            eName: concertName,
            eDate: concertDate,
            sourceImage: concertImage,
            description: concertDescription,
            song: featuredSong,
            city: concertCity,
            state: concertState,
            eBandList: bandName
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
                    setConcertImage(reader.result);
                }
            }
        }
    };

    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConcertDate(new Date(event.target.value.replace("T","\ ")));
    }

    const date = concertDate;
    const dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split("T")[0] 
                           + "T" + ("0"+concertDate.getHours()).slice(-2) + ":" + ("0" + concertDate.getMinutes()).slice(-2);

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
                                autoComplete={concertName}
                                value={concertName}
                                autoFocus
                                onChange={(e) => setConcertName(e.target.value)}
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
                                autoComplete={concertDescription}
                                value={concertDescription}
                                autoFocus
                                onChange={(e) => setConcertDescription(e.target.value)}
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
                                autoComplete={bandName}
                                value={bandName}
                                autoFocus
                               onChange={(e) => setBandName(e.target.value)}
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
                                autoComplete={featuredSong}
                                value={featuredSong}
                                autoFocus
                                onChange={(e) => setFeaturedSong(e.target.value)}
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
                                autoComplete={concertCity}
                                value={concertCity}
                                autoFocus
                                onChange={(e) => setConcertCity(e.target.value)}
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
                                onChange={(e) => setConcertState(e.target.value)}
                            />
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
