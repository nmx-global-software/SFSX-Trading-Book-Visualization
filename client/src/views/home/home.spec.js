import React from 'react'
import { shallow } from 'enzyme'

import Home from './home'
import TradingFormContainer from '../../containers/trading-form-container'

describe('<Home />', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallow(<Home />)
    });

    it('renders TradingFormContainer', () => {
        expect(wrapper.find(TradingFormContainer)).not.toBeNull()
    });
});