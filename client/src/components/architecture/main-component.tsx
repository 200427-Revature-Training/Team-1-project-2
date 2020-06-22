import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeComponent } from '../home-components/home-feed-component';
import { ConcertPageComponent } from '../concert-components/profile-feed-component';
import { ProfileComponent } from '../profile-components/profile-component';
import {SignupComponent} from '../registration/signup-component'
import  LoginComponent from '../login-components/login-component';
import HeaderComponent from './header-component';

const MainComponent: React.FC = () => {
  return (
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <main>
            <Route exact path='/home'>
                <HomeComponent></HomeComponent>
            </Route>
            <Route exact path='/concert'>
                <ConcertPageComponent></ConcertPageComponent>
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
