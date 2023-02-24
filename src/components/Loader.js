import "./styles/loader.css";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

const Loader = () => {
  return <span data-testid="loader" className="loader"></span>;
};

export default Loader;
