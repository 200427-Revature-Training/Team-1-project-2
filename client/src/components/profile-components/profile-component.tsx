import React, { useState } from 'react'
import './profile.css'
import { Button, Modal, Form } from 'react-bootstrap'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';

export const ProfileComponent: React.FC = () => {
    const [show, setShow] = useState(false);
    const [genre, setGenre] = useState('Rock')
    const [band, setBand] = useState('Rolling Stones');
    const [homeCity, setHomeCity] = useState('Louisville');
    const [homeState, setHomeState] = useState('KY');
    const [name, setName]=useState('My Name');
    const [bio, setBio] = useState(`This is a description about me hqwudbwjnveuirbgfvnemwcmuiwenrfnlkamdspoji wbefyuieuicmeiworcnuiwehrcuweicu wemrciweiurfnuiwerhbviuniuw nuweuirvbiurwtvhwruthv`)
    const [email, setEmail] = useState('fakeEmail@fakeWeb.net')
    const [song, setSong] = useState('https://www.youtube.com/embed/kfORcR2VSbc')
    const [image,setImage]=useState('data:image/png;base64,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')
    const handleSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
        setGenre(event.target.value as string);
    };
    const handleSelectState = (event: React.ChangeEvent<{ value: unknown }>) => {
        setHomeState(event.target.value as string);
    };
    const handleBio =(event: React.ChangeEvent<HTMLInputElement>) => {
        setBio(event.target.value);
    };
    const handleBand =(event: React.ChangeEvent<HTMLInputElement>) => {
        setBand(event.target.value);
    };
    const handleCity =(event: React.ChangeEvent<HTMLInputElement>) => {
        setHomeCity(event.target.value);
    };
    const handleEmail =(event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const handleName =(event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    const handleSong =(event: React.ChangeEvent<HTMLInputElement>) => {
        setSong(event.target.value);
    };
    const handleImage=(event: React.ChangeEvent<HTMLInputElement>)=>{
        if(event.target.files){
            let reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = ()=>{
                if (typeof reader.result == 'string'){
                    setImage(reader.result);
                }
            }


        }
    };
    return (
        <section>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" onChange={handleEmail} value={email} placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={name} onChange={handleName} placeholder="Your name" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Bio</Form.Label>
                            <Form.Control as="textarea" onChange={handleBio} rows={3} value={bio} placeholder="Tell us about yourself" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Favorite Band</Form.Label>
                            <Form.Control type="text" value={band} onChange={handleBand} placeholder="Rolling Stones" />
                        </Form.Group>
                        <FormControl className = "myFormStyle">
                            <Form.Label>Genre</Form.Label>
                            <Select
                                className='removeMargin'
                                value={genre}
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
                                value={homeState}
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
                            <Form.Control type="text" onChange={handleCity} value={homeCity} placeholder="Boston" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Favorite song</Form.Label>
                            <Form.Control type="text" onChange={handleSong} value={song} placeholder="provide a youtube link" />
                        </Form.Group>
                        <Form.Label>Profile Picture</Form.Label>
                    <br></br>
                    <input type="file" onChange={handleImage}/>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => setShow(false)}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>


            <div className="my-container row">
                <div className="col-3 profile-pic">
                    <br></br>
                    <img className="" src={image} />
                    <h3>{name}</h3>
                    <br></br>
                    <h5>{email}</h5>
                    <br></br>
                    <Button onClick={() => setShow(true)}>Edit Profile</Button>
                </div>
                <div className="col-4">
                    <br></br>
                    <h4>Bio</h4>
                    <ul className="myList">
                        <p>{bio}</p>
                    </ul>
                    <br></br>
                    
                    <h4>Favorite Band</h4>
                    <ul className="myList">
                        <p>{band}</p>
                    </ul>
                    <h4>Favorite Genre</h4>
                    <ul className="myList">
                        <p>{genre}</p>
                    </ul>
                    <h4>Hometown</h4>
                    <ul className="myList">

                        <p>{homeCity}, {homeState}</p>
                    </ul>

                </div>
                <div className="col-5 iframe-container">
                    <h3>Favorite song</h3>
                    <br></br>

                    <iframe className='responsive-iframe' src={song} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                </div>
            </div>
        </section>

    )
}
