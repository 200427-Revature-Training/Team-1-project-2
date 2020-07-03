import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import HomeComponent from '../home-components/home-feed-component';
import { ConcertPageComponent } from '../profile-feed-components/profile-feed-component';
import { ProfileComponent } from '../profile-components/profile-component';
import  ConcertDetailsComponent  from '../concert-details-components/concert-details';
import {SignupComponent} from '../registration/signup-component'
import  LoginComponent from '../login-components/login-component';
import HeaderComponent from './header-component';

const MainComponent: React.FC = () => {
  return (
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <main>
            <Route exact path='/'>
                <Redirect to='/home'/>
            </Route>
            <Route exact path='/home'>
                <HomeComponent></HomeComponent>
            </Route>
            <Route exact path='/concert'>
                <ConcertPageComponent></ConcertPageComponent>
            </Route>
            <Route exact path='/concert/details'>
                <ConcertDetailsComponent></ConcertDetailsComponent>
            </Route>
            <Route exact path='/profile'>
                <ProfileComponent></ProfileComponent>
            </Route>
            <Route exact path='/login'>
                <LoginComponent/>
            </Route>
            <Route exact path='/signup'>
                <SignupComponent></SignupComponent>
            </Route>
        </main>
    </BrowserRouter>
  );
}

export default MainComponent;
