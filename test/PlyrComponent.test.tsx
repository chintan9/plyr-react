import { shallow } from 'enzyme'
import React from 'react'

import PlyrComponent from '../src/PlyrComponent'

describe('<PlyrComponent />', () => {
  it('should render', () => {
    const wrapper = shallow(<PlyrComponent />)

    expect(wrapper).toBeDefined()
  })
})
