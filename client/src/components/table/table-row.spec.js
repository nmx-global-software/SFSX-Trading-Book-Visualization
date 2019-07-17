import React from 'react'
import { shallow } from 'enzyme'
import TableRow from './table-row.jsx'

describe('<TableRow />', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallow(<TableRow />)
    })

    it('renders nothing if data and resolvers are not passed', () => {
        expect(wrapper.find('tr')).toHaveLength(0)
    })

    it('renders 3 cells with name, age, gender values', () => {
        const data = { name: 'John', age: 20, gender: 'male' }
        const resolvers = [d => d.name, d => d.age, d => d.gender]

        wrapper.setProps({ data, resolvers })
        expect(wrapper.find('tr')).toHaveLength(1)
        expect(wrapper.find('td')).toHaveLength(3)
        expect(wrapper.find('td').at(0).text()).toBe('John')
        expect(wrapper.find('td').at(1).text()).toBe('20')
        expect(wrapper.find('td').at(2).text()).toBe('male')



    })
})