import React from 'react';
import { mount } from 'enzyme';
import  { HomeComponent } from '../../components/home-components/home-feed-component';


const routeComponentPropsMock = {
    history: {} as any,
    location: {} as any,
    match: {} as any,
  }

describe('home-feed.component', () => {
   test('basic render test', () => {

       const wrapper = mount(<HomeComponent {...routeComponentPropsMock}/>)
       expect(wrapper).toBeDefined();
   });

   test('basic render test', () => {

    const wrapper = mount(<HomeComponent {...routeComponentPropsMock}/>)
    expect(wrapper).toBeDefined();
  }) 
});
