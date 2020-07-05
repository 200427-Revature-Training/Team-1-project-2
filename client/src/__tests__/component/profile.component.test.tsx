import React from 'react';
import { mount } from 'enzyme';
import  { ProfileComponent } from '../../components/profile-components/profile-component';

describe('login component', () => {
   test('basic render test', () => {

    try {
      const wrapper = mount(<ProfileComponent />)
      console.log('I am a loginWrapper' + wrapper)
      expect(wrapper).toBeNull();
    } catch (error) {
      console.log('I am a login catch error = ' + error);
    }

   });

});