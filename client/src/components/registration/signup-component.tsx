import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { MenuItem, Select, FormControl } from '@material-ui/core';
import './signup.css';
import * as userRemote from '../../remotes/user-remote'
import { Redirect } from 'react-router';

export const SignupComponent: React.FC = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [bio, setBio] = useState('');
    const [homeCity, setHomeCity] = useState('');
    const [homeState, setHomeState] = useState('');
    const [song, setSong] = useState('');
    const [image, setImage] = useState('');
    const [band, setBand] = useState('');
    const [genre, setGenre] = useState('');
    const [submitted, setSubmit] = useState(false);
    /*id: 1, firstName: "Jordon", lastName: "Hill", email: "Hallstead2@gmail.com", userName: "Hallstead", …}
band: null
bio: "I like hotdogs."
email: "Hallstead2@gmail.com"
firstName: "Jordon"
id: 1
lastName: "Hill"
password: "password"
picture: "https://avatars2.githubusercontent.com/u/38665384?s=460&v=4"
place: {id: 1, zipCode: 83440, state: "ID", city: "Rexburg", streetAddress: "248 South 3rd West"}
role: {id: 1, role: "fan"}
song: "https://www.youtube.com/watch?v=9mD-ZmWuFTQ"
userName: "Hallstead"*/
    const handleSelectState = (event: React.ChangeEvent<{ value: unknown }>) => {
        setHomeState(event.target.value as string);
    };
    const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            let reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = () => {
                if (typeof reader.result == 'string') {
                    setImage(reader.result);
                }
            }


        }
    };
    const post = async () => {
        const response = await userRemote.postUser({
            firstName:first,
            lastName:last,
            email:email,
            userName:username,
            password:password,
            bio:bio,
            band:band,
            song:song,
            city:homeCity,
            state:homeState,
            picture:image,
            genre:genre,
            role:{id:1,role:'fan'}
        });
        localStorage.setItem("userId",response.data.id.toString());
        localStorage.setItem('userName', response.data.userName);
        localStorage.setItem('userCity', response.data.city);
        localStorage.setItem('userState', response.data.state);
        localStorage.setItem('userRoleId',response.data.role.id);
        setSubmit(true);
    }
    if (submitted){
        return (<Redirect to='/profile'/>)
    }else{

        return (
            <section>
            <h1>User Registration</h1>
            <div className="col center">
                <div className='container signup-contain'>

                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" value={first} onChange={(e) => setFirst(e.target.value)} placeholder="First name" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" value={last} onChange={(e) => setLast(e.target.value)} placeholder="Last name" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Bio</Form.Label>
                            <Form.Control as="textarea" onChange={(e) => setBio(e.target.value)} rows={3} value={bio} placeholder="Tell us about yourself" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Favorite Band Name</Form.Label>
                            <Form.Control type="text" value={band} onChange={(e) => setBand(e.target.value)} placeholder="Band name" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Favorite Genre</Form.Label>
                            <Form.Control type="text" value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="Genre" />
                        </Form.Group>

                        <br></br>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Home City</Form.Label>
                            <Form.Control type="text" onChange={(e) => setHomeCity(e.target.value)} value={homeCity} placeholder="City" />
                        </Form.Group>
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
                            <Form.Label>Favorite song</Form.Label>
                            <Form.Control type="text" onChange={(e) => setSong(e.target.value)} value={song} placeholder="provide a youtube link" />
                        </Form.Group>
                        <Form.Label>Profile Picture</Form.Label>
                        <br></br>
                        <input type="file" onChange={handleImage} />
                    </Form>
                    <br></br>
                    <button className="btn-primary btn" onClick={post} >Submit</button>
                    <div></div>
                </div>
            </div>
        </section>
    );
}
}