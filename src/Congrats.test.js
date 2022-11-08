import React from "react";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "@zarconontol/enzyme-adapter-react-18";
import Congrats from "./Congrats";
import { findByTestAttr } from "./test/testUtils";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

let props = {};

test("renders without error", () => {
  const wrapper = shallow(<Congrats {...props} />);
  const component = wrapper.find("[data-test='component-congrats']");

  expect(component.length).toBe(1);
});

test("renders no text when success prop is false", () => {
  props = { success: false };
  const wrapper = shallow(<Congrats {...props} />);
  const component = wrapper.find("[data-test='component-congrats']");

  expect(component.text()).toBe("");
});

test("renders non-empty congrats message when success prop is true", () => {
  props = { success: true };
  const wrapper = shallow(<Congrats {...props} />);
  const message = wrapper.find("[data-test='congrats-message']");

  expect(message.text().length).not.toBe(0);
});
