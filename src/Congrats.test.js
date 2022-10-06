import React from "react";
import App from "./App";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "@zarconontol/enzyme-adapter-react-18";
import Congrats from "./Congrats";
import { findByTestAtt } from "./../test/testUtils";

/**
 * Factory function to create a ShallowWrapper for the Congrats component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => shallow(<Congrats {...props} />);

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAtt(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("renders no text when `success` prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAtt(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test("renders non-empty congrats message when `success` prop is true", () => {
  const wrapper = setup({ success: true });
  const component = findByTestAtt(wrapper, "congrats-message");
  expect(component.text().length).not.toBe(0);
});
