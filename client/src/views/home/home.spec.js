import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import { createStore } from "redux";

import Home from './home'
import TradingFormContainer from '../../containers/trading-form-container'

describe('<Home />', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallow(<Provider store={createStore(() => ({}))}><Home /></Provider>)
    });

    it('renders TradingFormContainer', () => {
        expect(wrapper.find(TradingFormContainer)).not.toBeNull()
    });
});