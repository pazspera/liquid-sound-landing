import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <h1>Hola mundo!</h1>
      </ThemeProvider>
    </>
  )
}

export default App
