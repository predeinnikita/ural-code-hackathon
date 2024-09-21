import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Routing } from "./components/routing/Routing";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <BrowserRouter>
          <Routing></Routing>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
