import React from 'react'
import { shallow } from 'enzyme'

import PlyrComponent from './PlyrComponent'

describe('<PlyrComponent />', () => {
  it('should render', () => {
    const wrapper = shallow(<PlyrComponent />)

    expect(wrapper).toBeDefined()
  })

  it('should allow custom className', () => {
    const props = {
      className: 'Custom',
    }
    const wrapper = shallow(<PlyrComponent {...props} />)

    expect(wrapper.hasClass(props.className)).toBe(true)
  })
})
