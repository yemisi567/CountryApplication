import { shallow } from "enzyme";
import BorderDetails from "../pages/BorderDetails";
import { Provider } from "react-redux";
import store from "../store";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("BorderDetails", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <BorderDetails />
      </Provider>
    );
  });

  it("should render properly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
