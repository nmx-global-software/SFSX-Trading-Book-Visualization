import { duckifyActionType } from './action-utils';

describe('it test action-utils', ()=>{
    it("duckifyActionType should return full name of action type", ()=>{
        const expectedActionType = "sfsx-trading-book/startup/LOAD";
        expect(duckifyActionType("startup", "LOAD")).toEqual(expectedActionType);
    })
})