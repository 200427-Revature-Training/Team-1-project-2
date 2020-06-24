import React from 'react';
import { mount } from 'enzyme';
import  { HomeComponent } from '../../components/home-components/home-feed-component';
import { RouteComponentProps } from 'react-router';


const routeComponentPropsMock = {
    history: {} as any,
    location: {} as any,
    match: {} as any,
  }

describe('home-feed.component', () => {
   test('basic render test', () => {

       const wrapper = mount(<HomeComponent {...routeComponentPropsMock}/>)
       expect(wrapper).toBeDefined();
   }) 
});
