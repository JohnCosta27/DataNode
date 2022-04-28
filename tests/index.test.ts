import { main } from '../src/index';

describe("Command line argument return string", () => {
  test("No arguments returns help message", () => {
    expect(main([])).toBe("Please enter an argument");
  });
});
