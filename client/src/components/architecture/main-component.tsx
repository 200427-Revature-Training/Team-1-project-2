import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeComponent } from '../home-components/home-component';
import { FeedComponent } from '../feed-components/feed-component';
import { ConcertPageComponent } from '../concert-components/concert-page-component';
import { ProfileComponent } from '../profile-components/profile-component';



const MainComponent: React.FC = () => {
  return (
      <BrowserRouter>
      <div>
        <main>
      <h1>Hello this is the main component</h1>
            <Route exact path='/home'>
                <HomeComponent></HomeComponent>
            </Route>
            <Route exact path='/feed'>
                <FeedComponent></FeedComponent>
            </Route>
            <Route exact path='/concert'>
                <ConcertPageComponent></ConcertPageComponent>
            </Route>
            <Route exact path='/profile'>
                <ProfileComponent></ProfileComponent>
            </Route>



        </main>
      </div>
    </BrowserRouter>
  );
}

export default MainComponent;
