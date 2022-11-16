import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@zarconontol/enzyme-adapter-react-18";
import Input from "./Input";
import { checkProps } from "./test/testUtils";
import React from "react";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

// mock entire module for destructuring useState on import ////
// const mockSetCurrentGuess = jest.fn();
// jest.mock("react", () => ({
//   ...jest.requireActual("react"),
//   useState: (initialState) => [initialState, mockSetCurrentGuess],
// }));

const setup = (success = false, secretWord = "party") => {
  return shallow(<Input success={success} secretWord={secretWord} />);
};

describe("render", () => {
  describe("success is true", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(true);
    });

    test("Input renders without error", () => {
      const inputComponent = wrapper.find('[data-test="component-input"]');

      expect(inputComponent.length).toBe(1);
    });

    test("input box does not show", () => {
      const inputBox = wrapper.find('[data-test="input-box"]');

      expect(inputBox.exists()).toBe(false);
    });

    test("submit button does not show", () => {
      const submitButton = wrapper.find('[data-test="submit-button"]');

      expect(submitButton.exists()).toBe(false);
    });
  });

  describe("success is false", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(false);
    });

    test("Input renders without error", () => {
      const inputComponent = wrapper.find('[data-test="component-input"]');

      expect(inputComponent.length).toBe(1);
    });

    test("input box shows", () => {
      const inputBox = wrapper.find('[data-test="input-box"]');

      expect(inputBox.exists()).toBe(true);
    });

    test("submit button shows", () => {
      const submitButton = wrapper.find('[data-test="submit-button"]');

      expect(submitButton.exists()).toBe(true);
    });
  });
});

test("does not throw warning with expected props", () => {
  checkProps(Input, { secretWord: "party" });
});

describe("state controlled input field", () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;
  let originalUseState;
  beforeEach(() => {
    // mockSetCurrentGuess = jest.fn();
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup();
  });

  afterEach(() => {
    React.useState = originalUseState;
  });

  test("state updates with value of input box upon change", () => {
    // const mockSetCurrentGuess = jest.fn();
    // React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

    // const wrapper = setup();
    const inputBox = wrapper.find('[data-test="input-box"]');

    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  test("field is cleared upon submit button click", () => {
    // const mockSetCurrentGuess = jest.fn();
    // React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

    // const wrapper = setup();
    const submitButton = wrapper.find('[data-test="submit-button"]');

    submitButton.simulate("click", { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
