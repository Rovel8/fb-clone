import React from "react";
import {shallow} from 'enzyme'
import {Posts} from "./Posts";

it('Should render posts', () => {
    const component = shallow(<Posts />)
    const wrapper = component.find(`[data-test='posts']`)
    expect(wrapper.length).toBe(1)
})