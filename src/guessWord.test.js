import React from "react";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "@zarconontol/enzyme-adapter-react-18";
import App from "./App";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

/**
 * Create wrapper with specified initial conditions,
 * then submit a guessed word of 'train'
 * @function
 *
 * @param {object} state - Initial conditions
 * @returns {Wrapper} - Enzyme wrapper of mounted App component
 */
const setup = (state = {}) => {
  // TODO: apply state
  const wrapper = mount(<App />);

  // add value to nput box
  const inputBox = wrapper.find('[data-test="input-box"]');
  inputBox.simulate("change", { target: { value: "train" } });

  // simulate click on submit button
  const submitButton = wrapper.find('[data-test="submit-button"]');
  submitButton.simulate("click", { preventDefault() {} });

  return wrapper;
};

describe("no words guessed", () => {});

describe("some words guessed", () => {});

describe("guess secret word", () => {});
