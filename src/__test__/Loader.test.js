import React from "react";
import { shallow } from "enzyme";
import Loader from "../components/Loader";

describe("Loader", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the class "loader"', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.find("span").hasClass("loader")).toBe(true);
  });
});
