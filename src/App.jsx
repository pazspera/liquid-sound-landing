import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home/Home";
import ThankYou from "./pages/ThankYou/ThankYou";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={ <Home/> }></Route>
            <Route path="/thank-you" element={ <ThankYou/>}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
