import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

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
    render(<App />);
    const navBarElement = screen.getByTestId("NavBar");
    expect(navBarElement).toBeInTheDocument();
  });
});
