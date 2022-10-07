import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
// import EnzymeAdapter from "@zarconontol/enzyme-adapter-react-18";
import Congrats from "./Congrats";
import { findByTestAtt, checkProps } from "./../test/testUtils";

const defaultProps = {
  success: false,
};

/**
 * Factory function to create a ShallowWrapper for the Congrats component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

// Enzyme.configure({
//   adapter: new EnzymeAdapter(),
// });

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

test("does not throw warning with expected props", () => {
  const expectedProps = { success: false };
  // const propError = checkPropTypes(
  //   Congrats.propTypes,
  //   expectedProps,
  //   "prop",
  //   Congrats.name
  // );
  // expect(propError).toBeUndefined();

  checkProps(Congrats, expectedProps);
});
