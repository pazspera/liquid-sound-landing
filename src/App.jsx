import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "@splidejs/react-splide/css";
import "aos/dist/aos.css";

import Home from "./pages/Home/Home";
import ThankYou from "./pages/ThankYou/ThankYou";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NoticeSection from "./components/NoticeSection/NoticeSection";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <BrowserRouter>
          <ScrollToTop/>
          <Navbar />
          <Routes>
            <Route exact path="/" element={ <Home/> }></Route>
            <Route path="/gracias-por-contactarnos" element={ <ThankYou/> }></Route>
            <Route path="*" element={
              <NoticeSection
                title="404 - Página no encontrada"
                message="No pudimos encontrar la página que está buscando."
                secondaryMessage="Es posible que el enlace esté desactualizado o que la página haya sido movida."
              />
            }></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
