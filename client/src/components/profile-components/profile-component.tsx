import React, { useState, useEffect } from 'react'
import './profile.css'
import { Button } from 'react-bootstrap'
import { ProfileModal } from './profile-modal'
import * as userRemote from '../../remotes/user-remote'



export const ProfileComponent: React.FC = () => {
    const [show, setShow] = useState(false);
    const [genre, setGenre] = useState('')
    const [band, setBand] = useState('');
    const [first, setFirst] = useState('');
    const [last, setLast]= useState('')
    const [bio, setBio] = useState(``)
    const [email, setEmail] = useState('')
    const [homeCity, setHomeCity] = useState('');
    const [homeState, setHomeState] = useState('');
    const [song, setSong] = useState('');
    const [image, setImage] = useState('')

    const states = { show: show, genre: genre, band: band, homeCity: homeCity, homeState: homeState, first: first, last:last,bio: bio, email: email, song: song, image: image };
    const setters = {
        setShow: setShow, setGenre: setGenre, setBand: setBand, setHomeCity: setHomeCity, setHomeState: setHomeState,
        setFirst: setFirst,setLast:setLast, setBio: setBio, setEmail: setEmail, setSong: setSong, setImage: setImage
    }
    useEffect(() => {

        load();
    }, []);

    const load = async () => {
        const user = await userRemote.getUser();
        const userData = user.data;
        // console.log('whats user data profile component - ' +userData);
        setFirst(userData.firstName);
        setLast(userData.lastName)
        setBio(userData.bio);
        setEmail(userData.email);
      //  console.log('user data band = ' + userData.band);
        setBand(userData.band);
        setHomeCity(userData.city);
        setGenre(userData.genre);
        if (userData.song.includes('watch')) {
            const str = userData.song.split("=");
            const embed = "https://www.youtube.com/embed/" + str[1];
            setSong(embed);
        
        }else if(userData.song.includes('embed')){
            setSong(userData.song);
        }
         else {
            const str = userData.song.split("e/");
            const embed = "https://www.youtube.com/embed/" + str[1];
            setSong(embed);
        }
        setHomeState(userData.state);
        setImage(userData.picture);
     //   console.log(userData)
    };

    if (!localStorage.getItem('userId')){
        return (<section>
            <h1>Please login to view your profile.</h1>
            <Button href = "/login">Login</Button>
        </section>)
    }else if (!first) {
        return (
            <div className="loading">

                <img className="loading-img" src="https://media2.govtech.com/images/940*712/SHUTTERSTOCK_LOADING_SYMBOL_BROADBAND_INTERNET_SPEED.jpg" />
            </div>
        )
    } 
     else {
        return (
            <section>

                <ProfileModal states={states} setters={setters}></ProfileModal>


                <div className="my-container row">
                    <div className="col-3 profile-pic">
                        <br></br>
                        <img src={image} />
                        <h3>{first} {last}</h3>
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
}
