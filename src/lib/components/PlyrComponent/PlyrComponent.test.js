import React from 'react'
import { shallow } from 'enzyme'

import PlyrComponent from './PlyrComponent'

describe('<PlyrComponent />', () => {
  it('should render', () => {
    const wrapper = shallow(<PlyrComponent />)

    expect(wrapper).toBeDefined()
  })
})
