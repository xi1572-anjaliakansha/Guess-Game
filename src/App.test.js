import React from "react";
import { shallow } from "enzyme";
import App from "./App";

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  return wrapper;
};

test("App Component", () => {});
