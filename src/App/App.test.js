import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  let mockRes = [{
    name: 'fakeName',
    date: 'fakeDate',
    time: 'fakeTime',
    number: 'fakeNumber',
    id: 'fakeId',
  }]

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when postResOnDOM is invoked', () => {
    wrapper.instance().postResOnDOM(mockRes)
    expect(wrapper.state('reservations')).toEqual(mockRes)
  });

})
