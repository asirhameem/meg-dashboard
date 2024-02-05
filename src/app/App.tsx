import { Provider } from "react-redux";
import { store } from "../store/store.ts";
import Routes from "../routes";
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
};

export default App;
