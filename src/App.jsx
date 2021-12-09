import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Layout from "./layout";
// import Detail from '../detail';

const BasicRoute = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        {/* <Route exact path="/detail" component={Detail}/> */}
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default BasicRoute;
