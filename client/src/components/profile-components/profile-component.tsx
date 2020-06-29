import React, { useState, useEffect } from 'react'
import './profile.css'
import { Button, Modal, Form } from 'react-bootstrap'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';
import { ProfileModal } from './profile-modal'
import * as userRemote from '../../remotes/user-remote'



export const ProfileComponent: React.FC = () => {
    const [show, setShow] = useState(false);
    const [genre, setGenre] = useState('')
    const [band, setBand] = useState('');
    const [name, setName] = useState('');
    const [bio, setBio] = useState(``)
    const [email, setEmail] = useState('')
    const [homeCity, setHomeCity] = useState('');
    const [homeState, setHomeState] = useState('');
    const [song, setSong] = useState('https://youtu.be/OueDEEP2byE');
    const [image, setImage] = useState('')

    const states = { show: show, genre: genre, band: band, homeCity: homeCity, homeState: homeState, name: name, bio: bio, email: email, song: song, image: image };
    const setters = {
        setShow: setShow, setGenre: setGenre, setBand: setBand, setHomeCity: setHomeCity, setHomeState: setHomeState,
        setName: setName, setBio: setBio, setEmail: setEmail, setSong: setSong, setImage: setImage
    }
    useEffect(() => {
        const load = async () => {
            console.log(await userRemote.getAllUsers());
            const user = await userRemote.getUser();
            const userData = user.data;
            setName(userData.firstName + " " + userData.lastName);
            setBio(userData.bio);
            setEmail(userData.email);
            setBand(userData.band);
            setHomeCity(userData.city);;
            if(userData.song.includes('watch')){
                const str = userData.song.split("=");
                const embed = "https://www.youtube.com/embed/"+str[1];
                setSong(embed);
                console.log(embed);
            }else{
                const str = userData.song.split("e/");
                const embed = "https://www.youtube.com/embed/"+str[1];
                console.log(embed);
                setSong(embed);
            }
            setHomeState(userData.state);
            setImage(userData.picture);
            console.log(userData)
        };
        load();
    }, []);
    
   
    return (
        <section>

            <ProfileModal states={states} setters={setters}></ProfileModal>


            <div className="my-container row">
                <div className="col-3 profile-pic">
                    <br></br>
                    <img src={image} />
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
