import CountryCards from "../components/CountryCards";
import { render, screen } from "@testing-library/react";
import Loader from "../components/Loader";
import { shallow } from "enzyme";

describe("CountryCards", () => {
  it("should render loader if isFetchedAfterMount is false or loading", () => {
    render(
      <CountryCards
        isFetchedAfterMount={false}
        loading={true}
        error={null}
        data={null}
        query=""
      />
    );
    const wrapper = shallow(<Loader />);
    expect(wrapper.find("span").hasClass("loader")).toBe(true);
  });

  it("should render data if data is not empty and query is empty", () => {
    render(
      <CountryCards
        isFetchedAfterMount={true}
        loading={false}
        error={null}
        data={{ data: [{ name: { common: "Nigeria" } }] }}
        query=""
      />
    );
    const queryElement = screen.getByTestId(/query/i);
    expect(queryElement).toBeInTheDocument();
  });
});
