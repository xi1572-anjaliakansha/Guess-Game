import checkPropTypes from "check-prop-types";

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
