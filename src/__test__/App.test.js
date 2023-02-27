import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../store";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

describe("App", () => {
  it("renders the App component", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const navBarElement = screen.getByTestId("NavBar");
    expect(navBarElement).toBeInTheDocument();
  });
  it("should render three routes", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Route")).toHaveLength(3);
  });
});
