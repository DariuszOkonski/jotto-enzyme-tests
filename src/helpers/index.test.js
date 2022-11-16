import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@zarconontol/enzyme-adapter-react-18";
import { getLetterMatchCount } from ".";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

describe("getLetterMatchCount", () => {
  const secretWord = "party";

  test("returns correct count when there are no matching letters", () => {
    const letterMatchCount = getLetterMatchCount("bones", secretWord);

    expect(letterMatchCount).toBe(0);
  });

  test("returns the correct count when there are three matching letters", () => {
    const letterMatchCount = getLetterMatchCount("train", secretWord);

    expect(letterMatchCount).toBe(3);
  });

  test("returns the correct count when there are duplicate letters in the guess", () => {
    const letterMatchCount = getLetterMatchCount("parka", secretWord);

    expect(letterMatchCount).toBe(3);
  });
});
