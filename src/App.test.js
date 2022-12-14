import EnzymeAdapter from "@zarconontol/enzyme-adapter-react-18";
import Enzyme, { shallow } from "enzyme";
import App from "./App";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

const setup = () => {
  return shallow(<App />);
};

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = wrapper.find('[data-test="component-app"]');

  expect(appComponent).toHaveLength(1);
});
