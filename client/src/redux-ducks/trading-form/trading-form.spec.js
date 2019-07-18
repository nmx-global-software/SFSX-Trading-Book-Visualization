import moxios from 'moxios'
import configureMockStore from 'redux-mock-store'

import * as ducks from './trading-form';


describe('trading form actions', ()=>{
    const mockStore = configureMockStore()
    beforeEach(() => {
        moxios.install()
      })
    
      afterEach(() => {
        moxios.uninstall()
      })

      it('it should handle handleTickerChange', ()=>{
        const store = mockStore();
        const expectedAction = {type: ducks.HANDLE_TICKER_CHANGE, value:'value'};

        ducks.handleTickerChange(store.dispatch)('value');
        expect(store.getActions()[0]).toEqual(expectedAction)
      })
      it('it should handle handleTraderChange', ()=>{
        const store = mockStore();
        const expectedAction = {type: ducks.HANDLE_TRADER_CHANGE, value:'value'};
        
        ducks.handleTraderChange(store.dispatch)('value');
        expect(store.getActions()[0]).toEqual(expectedAction)
      })
      it('it should handle handlePriceChange', ()=>{
        const store = mockStore();
        const expectedAction = {type: ducks.HANDLE_PRICE_CHANGE, value:'value'};
        
        ducks.handlePriceChange(store.dispatch)('value');
        expect(store.getActions()[0]).toEqual(expectedAction)
      })
      it('it should handle handleSharesChange', ()=>{
        const store = mockStore();
        const expectedAction = {type: ducks.HANDLE_SHARES_CHANGE, value:'value'};
        
        ducks.handleSharesChange(store.dispatch)('value');
        expect(store.getActions()[0]).toEqual(expectedAction)
      })
      it('it should handle handleOrderTypeChange', ()=>{
        const store = mockStore();
        const expectedAction = {type: ducks.HANDLE_ORDER_TYPE_CHANGE, value:'value'};
        
        ducks.handleOrderTypeChange(store.dispatch)('value');
        expect(store.getActions()[0]).toEqual(expectedAction)
      })
      it('it should handle handleOrderSubmit', ()=>{
        const store = mockStore();
        const expectedAction = {type: ducks.LOCK_FORM};
        
        ducks.handleOrderSubmit(store.dispatch)({});
        expect(store.getActions()[0]).toEqual(expectedAction)
      })
})

describe('tradin-form reducer', ()=>{
    it("should handle no arg call and return initial state", function () {
        expect(ducks.default()).toEqual(ducks.initState);
    });
    it("should handle FORM_SUCCESS", function () {
        const action = {
            type:ducks.FORM_SUCCESS
        }
        expect(ducks.default(ducks.initState, action)).toEqual(ducks.initState);
    });
    it("should handle HANDLE_TICKER_CHANGE", function () {
        const action = {
            type:ducks.HANDLE_TICKER_CHANGE,
            value:'value'
        }
        const expecedState = {
            ...ducks.initState,
            ticker:action.value
        }
        expect(ducks.default(ducks.initState, action)).toEqual(expecedState);
    });
    it("should handle HANDLE_TRADER_CHANGE", function () {
        const action = {
            type:ducks.HANDLE_TRADER_CHANGE,
            value:'value'
        }
        const expecedState = {
            ...ducks.initState,
            trader:action.value
        }
        expect(ducks.default(ducks.initState, action)).toEqual(expecedState);
    });
    it("should handle HANDLE_PRICE_CHANGE", function () {
        const action = {
            type:ducks.HANDLE_PRICE_CHANGE,
            value:12
        }
        const expecedState = {
            ...ducks.initState,
            price:action.value
        }
        expect(ducks.default(ducks.initState, action)).toEqual(expecedState);
    });
    it("should handle HANDLE_SHARES_CHANGE", function () {
        const action = {
            type:ducks.HANDLE_SHARES_CHANGE,
            value:12
        }
        const expecedState = {
            ...ducks.initState,
            numberOfShares:action.value
        }
        expect(ducks.default(ducks.initState, action)).toEqual(expecedState);
    });
    it("should handle HANDLE_ORDER_TYPE_CHANGE", function () {
        const action = {
            type:ducks.HANDLE_ORDER_TYPE_CHANGE,
            value:'value'
        }
        const expecedState = {
            ...ducks.initState,
            type:action.value
        }
        expect(ducks.default(ducks.initState, action)).toEqual(expecedState);
    });
    it("should handle LOCK_FORM", function () {
        const action = {
            type:ducks.LOCK_FORM,
        }
        const expecedState = {
            ...ducks.initState,
            isLocked:true
        }
        expect(ducks.default(ducks.initState, action)).toEqual(expecedState);
    });
    it("should handle UNLOCK_FORM", function () {
        const action = {
            type:ducks.UNLOCK_FORM,
        }
        const expecedState = {
            ...ducks.initState,
            isLocked:false
        }
        expect(ducks.default(ducks.initState, action)).toEqual(expecedState);
    });
})