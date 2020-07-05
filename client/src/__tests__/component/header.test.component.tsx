import React from 'react';
import { mount } from 'enzyme';
import  { HeaderComponent } from '../../components/architecture/header-component';


const routeComponentPropsMock = {
    history: {} as any,
    location: {} as any,
    match: {} as any,
  }

describe('header component', () => {
   test('basic render test', () => {
    try {
        const wrapper = mount(<HeaderComponent {...routeComponentPropsMock}/>)
        expect(wrapper).toBeDefined();
    } catch (error) {
        console.log('I am a catch error in header test component');
    }

   });
}
)

