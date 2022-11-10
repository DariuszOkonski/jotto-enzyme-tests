import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@zarconontol/enzyme-adapter-react-18";
import GuessedWords from "./GuessedWords";
import { checkProps, findByTestAttr } from "./test/testUtils";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test("renders without error", () => {
    const wrapper = setup({ guessedWords: [] });
    const component = wrapper.find('[data-test="component-guessed-words"]');

    expect(component.length).toBe(1);
  });

  test("renders instructions to guess a word", () => {
    const wrapper = setup({ guessedWords: [] });
    const insturctions = wrapper.find('[data-test="guess-instructions"]');

    expect(insturctions.text().length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {});
