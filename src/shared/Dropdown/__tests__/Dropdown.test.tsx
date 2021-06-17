import { shallow, configure } from "enzyme"
import React from "react"
import { Dropdown } from "../Dropdown"
import Adapter from "enzyme-adapter-react-16"

configure({adapter: new Adapter()});

describe("Dropdown", () => {
    test("should render", () => {
        const wrapper = shallow(<Dropdown children={<div />} button={<button />}/>);
        expect(wrapper).toBeDefined();
        expect(wrapper.find("#button")).toBeDefined();
    });
})