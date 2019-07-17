import React from 'react'
import { shallow } from 'enzyme'

import RadioField from './radio-field.jsx'



describe('<RadioField />', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallow(<RadioField />)
    })

    it('render two radio inputs', () => {
        expect(wrapper.find('input')).toHaveLength(2)
    })

    it('render the labels', () => {
        wrapper.setProps({ firstLabel: 'Buy', secondLabel: 'Sell' })

        const radioLabels = wrapper.find('label.radio')
        expect(radioLabels).toHaveLength(2)
        expect(radioLabels.at(0).text()).toBe('Buy')
        expect(radioLabels.at(1).text()).toBe('Sell')
    })

    it('calls onChange when a radio button value is changed', () => {
        const onChange = jest.fn()
        wrapper.setProps({ onChange })
        wrapper.find('input').at(0).simulate('change')
        expect(onChange).toBeCalled()
    })
});