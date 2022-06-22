import './App.css';
import React from "react";
import {Route, BrowserRouter, Routes, Link} from "react-router-dom";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";

function App() {
  return (
      <>
      <div className="App">
        <h2>My Site</h2>
      </div>
      <BrowserRouter>
          <Routes>
            <Route path={"/"} exact={true} element={<Page1/>} />
            <Route path={"/page2"} exact={true} element={<Page2/>} />
            <Route path={"/page3"} exact={true} element={<Page3/>} />
          </Routes>
        </BrowserRouter>
      </>

  );
}


export default App;


