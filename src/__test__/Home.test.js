import React from "react";
import Home from "../pages/Home";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import store from "../store";

describe("Home Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });

  it("should render properly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
