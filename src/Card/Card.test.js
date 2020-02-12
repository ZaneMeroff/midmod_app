import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  let wrapper;
  let mockRes = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Card
      name='mockName'
      date='mockDate'
      time='mockTime'
      number='mockNumber'
      id='mockId'
    />)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})
