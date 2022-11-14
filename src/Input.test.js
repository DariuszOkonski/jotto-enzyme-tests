import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@zarconontol/enzyme-adapter-react-18";
import Input from "./Input";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

const setup = () => {
  return shallow(<Input />);
};

test("it's rendering", () => {
  const wrapper = shallow(<Input />);
  const inputComponent = wrapper.find('[data-test="component-input"]');

  expect(inputComponent.length).toBe(1);
});
