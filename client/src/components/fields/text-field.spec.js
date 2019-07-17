import React from 'react'
import { shallow } from 'enzyme'

import TextField from './text-field';

describe("<TextField />", ()=>{
    let props = {
        label:"label",
        value:"",
        onChange: jest.fn()
    }

    it("should render form filed", ()=>{
        const subject = shallow(<TextField {...props} />)
        const formField = subject.find(".field");

        const label = formField.find("label");
        expect(label.text()).toEqual(props.label);

        const control = formField.find("input");
        expect(control.props().value).toEqual(props.value);
        expect(control.props().type).toEqual("text");
    });

    it("should handle Name on change", () => {
        const subject = shallow(<TextField {...props} />)
        subject.find("input").simulate("change")
        expect(props.onChange).toHaveBeenCalled()
    });
})