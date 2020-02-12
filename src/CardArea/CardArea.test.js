import React from 'react';
import ReactDOM from 'react-dom';
import CardArea from './CardArea';
import { shallow } from 'enzyme';

describe('Card', () => {
  let wrapper;
  let mockRes = [{
    name: 'fakeName',
    date: 'fakeDate',
    time: 'fakeTime',
    number: 'fakeNumber',
    id: 'fakeId',
  }]

  beforeEach(() => {
    wrapper = shallow(
      <CardArea
        cards={mockRes}
       />
     )
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardArea />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})
