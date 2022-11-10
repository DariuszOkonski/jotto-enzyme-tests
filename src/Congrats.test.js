import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@zarconontol/enzyme-adapter-react-18";
import Congrats from "./Congrats";
import { checkPropTypes } from "prop-types";
// import { findByTestAttr } from "./test/testUtils";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

// const defaultProps = { success: false };

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
// const setup = (props = {}) => {
//  const setupProps = {...defaultProps, ...props}
//   return shallow(<Congrats {...setupProps} />);
// };

let props = {};

test("renders without error", () => {
  props = { success: false };
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

test("does not throw warning with expected props", () => {
  const expectedProps = { success: false };
  const propError = checkPropTypes(
    Congrats.propTypes,
    expectedProps,
    "prop",
    Congrats.name
  );

  expect(propError).toBeUndefined();
});
