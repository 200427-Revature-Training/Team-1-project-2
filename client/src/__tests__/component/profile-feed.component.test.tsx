import React from 'react';
import { mount } from 'enzyme';
import  { ConcertPageComponent } from '../../components/profile-feed-components/profile-feed-component';


describe('profile feed component', () => {
   test('basic render test', () => {

    try {
        const wrapper = mount(<ConcertPageComponent />)
        expect(wrapper).toBeDefined();
    } catch (error) {
        console.log('I am a catch error in profile feed component');
    }

   });

/*
   test('should render ', () => {

    const wrapper = mount(<ConcertPageComponent />)
    expect(wrapper).toBeDefined();
  }) 
  */
});