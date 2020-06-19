import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeComponent } from '../home-components/home-component';
import { FeedComponent } from '../feed-components/feed-component';
import { ConcertPageComponent } from '../concert-components/concert-page-component';
import { ProfileComponent } from '../profile-components/profile-component';
import  LoginComponent from '../login-components/login-component';
import HeaderComponent from './header-component';




const MainComponent: React.FC = () => {
  return (
      <BrowserRouter>
        <main>
            <HeaderComponent></HeaderComponent>
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



        </main>
    </BrowserRouter>
  );
}

export default MainComponent;
