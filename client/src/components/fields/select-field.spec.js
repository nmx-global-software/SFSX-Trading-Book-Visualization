import React from "react";
import { mount } from "enzyme";

import SelectField from "./select-field";

describe("<SelectField />", () => {
  let props = {
    label: "label",
    value: "",
    onChange: jest.fn(),
    data: [
      { name: "Zeguro", value: "ZGRO" },
      { name: "Google", value: "GOOG" },
      { name: "Facebook", value: "FB" },
      { name: "Oracle", value: "ORCL" }
    ]
  };
  it("should render form select input field", () => {
    const subject = mount(<SelectField {...props} />);
    const formField = subject.find(".field");

    const label = formField.find("label");
    expect(label.text()).toEqual(props.label);

    const control = formField.find("select");
    expect(control.props().value).toEqual(props.value);
    expect(control.props().children.length).toEqual(props.data.length);
  });

  it("should handle Name on change", () => {
    const subject = mount(<SelectField {...props} />);
    
    subject.find("select").simulate("change");
    expect(props.onChange).toHaveBeenCalled();
  });
});
