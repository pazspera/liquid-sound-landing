import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { themeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
      </ThemeProvider>
    </>
  )
}

export default App
