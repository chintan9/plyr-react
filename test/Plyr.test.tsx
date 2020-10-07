import { mount, shallow } from 'enzyme'
import React, { createRef } from 'react'

import Plyr from '../src/index'

describe('<Plyr />', () => {
  it('should render', () => {
    const wrapper = shallow(<Plyr />)

    expect(wrapper).toBeDefined()
  })

  it('should render and set a forward ref', () => {
    const setRef = jest.fn()
    const wrapper = mount(<Plyr ref={setRef} />)

    expect(wrapper).toBeDefined()
    expect(setRef).toHaveBeenCalled()
  })

  it('should render and have a plyr instance in ref.current', () => {
    const ref = createRef<any>()
    const wrapper = mount(<Plyr ref={ref} />)

    expect(wrapper).toBeDefined()
    expect(ref.current).toBeDefined()
    expect(ref.current.plyr).toBeDefined()
  })
})
