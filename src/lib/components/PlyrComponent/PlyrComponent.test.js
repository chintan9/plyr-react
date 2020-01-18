import {shallow} from 'enzyme'
import React from 'react'

import PlyrComponent from './PlyrComponent'

describe('<PlyrComponent />', () => {
  it('should render', () => {
    const wrapper = shallow(<PlyrComponent />)

    expect(wrapper).toBeDefined()
  })
})
