import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ThankYou from "./pages/ThankYou/ThankYou";
import Navbar from "./components/Navbar/Navbar";

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
        </BrowserRouter>
        <h1>Hola mundo!</h1>
      </ThemeProvider>
    </>
  )
}

export default App
