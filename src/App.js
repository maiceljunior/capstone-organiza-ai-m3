import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useCallback } from "react";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import { themes } from "./themes";
import { DarkLightButton } from "./pages/Dashboard/style";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const getOpositeTheme = useCallback(
    () => (currentTheme === "light" ? "dark" : "light"),
    [currentTheme]
  );

  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ThemeProvider theme={themes[currentTheme]}>
        {/* <DarkLightButton onClick={() => setCurrentTheme(getOpositeTheme())}>
            {getOpositeTheme()}
          </DarkLightButton> */}
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
