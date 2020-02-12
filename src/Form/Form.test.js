import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import { shallow } from 'enzyme';

describe('Form', () => {
  let wrapper;
  let mockPostToAPI = jest.fn();
  let mockRes = [{
    name: 'fakeName',
    date: 'fakeDate',
    time: 'fakeTime',
    number: 'fakeNumber',
    id: 'fakeId',
  }]

  beforeEach(() => {
    wrapper = shallow(
      <Form
        postToAPI={mockPostToAPI}
        res={mockRes}
       />
     )
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Form />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when clearInputs is invoked', () => {
    wrapper.instance().clearInputs()
    expect(wrapper.state()).toEqual({name: '', date: '', time: '', number: ''})
  })

  it('should update state when updateChange is invoked', () => {
    let mockEvent = {
      target: {
        name: 'mockName',
        date: 'mockDate',
        time: 'mockTime',
        number: 'mockNumber',
        id: 'mockId',
      }
    }
    wrapper.instance().updateChange(mockEvent)
    expect(wrapper.state('name')).toEqual('mockName')
  })

})
