import React from "react";
import { shallow } from "enzyme";
import Input from "./input";

import { findByTestAttr, storefactory } from "./../../test/testUtils";

const setup = (initialState = {}) => {
  const store = storefactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("Render", () => {
  describe("word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });

    test("renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("renders input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });
    test("renders submit button", () => {
      const button = findByTestAttr(wrapper, "submit-button");
      expect(button.length).toBe(1);
    });
  });

  describe("word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test("renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("does not renders input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    });
    test("does not renders submit button", () => {
      const button = findByTestAttr(wrapper, "submit-button");
      expect(button.length).toBe(0);
    });
  });
});

describe("update state", () => {});
