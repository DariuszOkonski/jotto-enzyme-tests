import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@zarconontol/enzyme-adapter-react-18";
import Input from "./Input";
import { checkProps } from "./test/testUtils";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

const setup = (secretWord = "party") => {
  return shallow(<Input secretWord={secretWord} />);
};

test("Input renders without error", () => {
  const wrapper = setup();
  const inputComponent = wrapper.find('[data-test="component-input"]');

  expect(inputComponent.length).toBe(1);
});

test("does not throw warning with expected props", () => {
  checkProps(Input, { secretWord: "party" });
});
