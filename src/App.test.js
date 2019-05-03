import React from 'react';
import 'jest-enzyme';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const welcome =  <p>
  Edit <code>src/App.js</code> and save to reload.</p>
  expect(wrapper).toContainReact(welcome);
});
