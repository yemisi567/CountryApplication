import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SearchBox from "../components/SearchBox";

describe("SearchBox", () => {
  it("should render the select menu and input box", () => {
    const handleInput = jest.fn();
    const handleOnChange = jest.fn();
    render(
      <SearchBox handleOnChange={handleOnChange} handleInput={handleInput} />
    );
    const placeholder = screen.getByPlaceholderText("Search for a country ...");
    expect(placeholder).toBeInTheDocument();
    const text = screen.getByText("Filter by Region");
    expect(text).toBeInTheDocument();
  });

  it("should call the handleInput and handleOnChange props when input and select are changed", async () => {
    const handleInput = jest.fn();
    const handleOnChange = jest.fn();
    render(
      <SearchBox handleOnChange={handleOnChange} handleInput={handleInput} />
    );

    const input = screen.getByPlaceholderText("Search for a country ...");
    const select = screen.getByTestId("countries");

    fireEvent.change(input, { target: { value: "test" } });
    expect(handleInput).toHaveBeenCalled();

    fireEvent.change(select, { target: { value: "asia" } });
    expect(handleOnChange).toHaveBeenCalled();
  });
});
