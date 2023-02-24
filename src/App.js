import "./App.css";
import "./dist/output.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBar } from "./components/Nav";

function App() {
  return (
    <>
      <>
        <div className="App bg-[#FAFAFA] dark:bg-[#1F2D36]">
          <div className="min-h-screen">
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </>
    </>
  );
}

export default App;
