import { shallow } from 'enzyme'
import React from 'react'

import Plyr from '../src/Plyr'

describe('<Plyr />', () => {
  it('should render', () => {
    const wrapper = shallow(<Plyr />)

    expect(wrapper).toBeDefined()
  })
})
