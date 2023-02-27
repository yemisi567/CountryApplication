import { render, screen } from "@testing-library/react";
import CountryDetails from "../components/CountryDetails";

export const mockProps = {
  countryName: "Australia",
  nativeName: [{ official: "Commonwealth of Australia" }],
  population: 250_100_000,
  region: "Oceania",
  subregion: "Australia and New Zealand",
  capital: ["Canberra"],
  tld: ".au",
  currency: [{ name: "Australian dollar" }],
  lang: ["English"],
  borders: ["New Zealand"],
};

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("CountryDetails", () => {
  it("should render the country details correctly", () => {
    render(<CountryDetails {...mockProps} />);
    expect(screen.getByTestId("details")).toBeInTheDocument();
  });
});
