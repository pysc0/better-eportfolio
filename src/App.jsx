import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import NFHandle from "./pages/NFHandle";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#d76a00",
      },
      secondary: {
        main: "#000000",
      },
      orangeLight1: {
        main: "#d97718",
      },
      orangeLight2: {
        main: "#dc8530",
      },
      orangeLight3: {
        main: "#de9248",
      },
      orangeDark1: {
        main: "#c26001",
      },
      orangeDark2: {
        main: "#ae5703",
      },
      orangeDark3: {
        main: "#9a4e04",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NFHandle />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
