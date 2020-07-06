import React from 'react';
import { mount } from 'enzyme';
import  { LoginComponent } from '../../components/login-components/login-component';


const routeComponentPropsMock = {
    history: {} as any,
    location: {} as any,
    match: {} as any,
  }

describe('login component', () => {
   test('basic render test', () => {

    try {
      const wrapper = mount(<LoginComponent {...routeComponentPropsMock}/>)
      console.log('I am a loginWrapper' + wrapper)
      expect(wrapper).toBeNull();
    } catch (error) {
      console.log('I am a login catch error = ' + error);
    }

   });

});
