import styles from "./app.module.scss";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className={styles.main}></div>
    </Provider>
  );
}

export default App;
