import React from 'react'
import { shallow } from 'enzyme'

import Table from './table'

describe('<Table />', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallow(<Table />)
    })

    it('renders nothing if data is not available', () => {
        expect(wrapper.find('table')).toHaveLength(0)
    })

    it('renders a table with 3 rows', () => {
        wrapper.setProps({ data: [{ name: "Rick" }, { name: "Jones" }, { name: "Smith" }] })
        expect(wrapper.find('table')).toHaveLength(1)
        expect(wrapper.find('TableRow')).toHaveLength(3)
    })

})