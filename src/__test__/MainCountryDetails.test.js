import { shallow } from "enzyme";

import { Provider } from "react-redux";
import MainCountryDetails from "../pages/MainCountryDetails";
import store from "../store";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("MainDetails", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <MainCountryDetails />
      </Provider>
    );
  });

  it("should render properly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
