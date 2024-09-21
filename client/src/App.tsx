import styles from "./app.module.scss";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Routing } from "./components/routing/Routing";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routing></Routing>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
