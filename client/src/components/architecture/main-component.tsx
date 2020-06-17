import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



const MainComponent: React.FC = () => {
  return (
      <BrowserRouter>
      <div>
        <main>
      <h1>Hello this is the main component</h1>
            <Route exact path='/home'>

            </Route>
            <Route exact path='/feed'>

            </Route>
            <Route exact path='/concert'>

            </Route>
            <Route exact path='/profile'>

            </Route>



        </main>
      </div>
    </BrowserRouter>
  );
}

export default MainComponent;
