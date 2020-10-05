import { mount, shallow } from 'enzyme'
import React, { createRef } from 'react'

import Plyr from '../src/Plyr'

describe('<Plyr />', () => {
  it('should render', () => {
    const wrapper = shallow(<Plyr />)

    expect(wrapper).toBeDefined()
  })

  it('should render using a forward ref', () => {
    const setRef = jest.fn()
    const wrapper = mount(<Plyr ref={setRef} />)

    expect(wrapper).toBeDefined()
    expect(setRef).toHaveBeenCalled()
  })
})
