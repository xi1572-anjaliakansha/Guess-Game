import checkPropTypes from "check-prop-types";
import rootReducer from "./../src/reducers/rootreducer";
import { createStore, applyMiddleware } from "redux";
import { middlewares } from "../src/configureStore";

export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};

export const findByTestAttr = (wrapper, value) => {
  const component = wrapper.find(`[data-test='${value}']`);
  return component;
};

export const checkProps = (component, expectedProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
  expect(propError).toBeUndefined();
};
