import { ThemeProvider } from "@emotion/react";
import Theme from "../../themes/Theme"
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../pages/Content/Home";
import Projects from "../../pages/Content/Projects";
import NotFound from "../../pages/Error/NotFound";
import Contact from "../../pages/Content/Contact";
import About from "../../pages/Content/About";
import Toolbox from "../../pages/Content/Toolbox";

const Router = () => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/toolbox" element={<Toolbox />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  )
}

export default Router;