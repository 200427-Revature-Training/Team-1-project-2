import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';

interface ModalComponents{
    states:any
    setters:any
}

export const ProfileModal: React.FC<ModalComponents> = (props) => {


    const handleSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
        props.setters.setGenre(event.target.value as string);
    };
    const handleSelectState = (event: React.ChangeEvent<{ value: unknown }>) => {
        props.setters.setHomeState(event.target.value as string);
    };

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

    return(
        <div>
            <Modal show={props.states.show} onHide={() => props.setters.setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" onChange={(e) => props.setters.setEmail(e.target.value)} value={props.states.email} placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={props.states.name} onChange={(e) => props.setters.setName(e.target.value)} placeholder="Your name" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Bio</Form.Label>
                            <Form.Control as="textarea" onChange={(e) => props.setters.setBio(e.target.value)} rows={3} value={props.states.bio} placeholder="Tell us about yourself" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Favorite Band</Form.Label>
                            <Form.Control type="text" value={props.states.band} onChange={(e) => props.setters.setBand(e.target.value)} placeholder="Rolling Stones" />
                        </Form.Group>
                        <FormControl className="myFormStyle">
                            <Form.Label>Genre</Form.Label>
                            <Select
                                className='removeMargin'
                                value={props.states.genre}
                                onChange={handleSelect}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="" disabled>Type</MenuItem>
                                <MenuItem value={'Rock'}>Rock</MenuItem>
                                <MenuItem value={'Hip-Hop'}>Hip-Hop</MenuItem>
                                <MenuItem value={'Pop'}>Pop</MenuItem>
                                <MenuItem value={'Jazz'}>Jazz</MenuItem>

                            </Select>
                        </FormControl>
                        <br></br>
                        <FormControl >
                            <Form.Label className='myFormStyle'>State</Form.Label>
                            <Select
                                className='removeMargin'
                                value={props.states.homeState}
                                onChange={handleSelectState}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="" disabled>Type</MenuItem>
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
                        </FormControl>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Home City</Form.Label>
                            <Form.Control type="text" onChange={(e) => props.setters.setHomeCity(e.target.value)} value={props.states.homeCity} placeholder="Boston" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Favorite song</Form.Label>
                            <Form.Control type="text" onChange={(e) => props.setters.setSong(e.target.value)} value={props.states.song} placeholder="provide a youtube link" />
                        </Form.Group>
                        <Form.Label>Profile Picture</Form.Label>
                        <br></br>
                        <input type="file" onChange={handleImage} />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => props.setters.setShow(false)}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}