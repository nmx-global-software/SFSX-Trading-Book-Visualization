import didMountWrapper from './wrapper'
import React from 'react'
import { mount } from 'enzyme'

describe('get hosts hoc', ()=>{
    it('should call onMount with params', ()=>{
        const Page = props => <div>hey</div>
        const WrappedComponent = didMountWrapper(Page);
        const props = {
            didMount: jest.fn()
        }
        const subject = mount(<WrappedComponent {...props}/>)
        expect(props.didMount).toHaveBeenCalledTimes(1)
        expect(props.didMount).toHaveBeenCalledWith(props)
    })
    it('should pass down the props', () => {
        const Page = props => <div>hey</div>
        const WrappedComponent = didMountWrapper(Page);
        const props = {
            didMount: jest.fn(),
            tests: "test",
            propTest: "propTest"
        }
        const subject = mount(<WrappedComponent {...props}/>)

        expect(subject.find(Page).at(0).props()).toEqual(props);
    })
})