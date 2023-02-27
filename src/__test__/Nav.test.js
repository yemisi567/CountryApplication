import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { NavBar } from "../components/Nav";
import { MemoryRouter } from "react-router-dom";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

describe("NavBar", () => {
  it("should render the navbar", () => {
    render(<NavBar />, { wrapper: MemoryRouter });
    const linkElement = screen.getByText(/Where in the world?/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("should render the dark mode switch", () => {
    render(<NavBar />, { wrapper: MemoryRouter });
    const linkElement = screen.getByText(/dark mode/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("should switch to dark mode when clicked", () => {
    render(<NavBar />, { wrapper: MemoryRouter });
    fireEvent.click(screen.getByText("dark mode"));
    expect(localStorage.getItem("mode")).toBe("dark");
  });
});
