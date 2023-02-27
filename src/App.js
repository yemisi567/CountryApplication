import "./App.css";
import "./dist/output.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainCountryDetails from "./pages/MainCountryDetails";
import BorderDetails from "./pages/BorderDetails";
import { NavBar } from "./components/Nav";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

function App() {
  return (
    <>
      <>
        <div className="App bg-[#FAFAFA] dark:bg-[#1F2D36]">
          <div className="min-h-screen">
            <BrowserRouter>
              <NavBar />
              <Routes data-testid="Routes">
                <Route exact path="/" element={<Home />}></Route>
                <Route
                  exact
                  path="/country/:name"
                  element={<MainCountryDetails />}
                ></Route>
                <Route
                  exact
                  path="/country/:name/:countryCode"
                  element={<BorderDetails />}
                ></Route>
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </>
    </>
  );
}

export default App;
