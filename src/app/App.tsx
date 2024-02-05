import { Provider } from "react-redux";
import { store } from "../store/store.ts";
import Routes from "../routes";
import { ToastAlert } from "../components/molecules";
const App = () => {
  return (
    <>
      <Provider store={store}>
        <ToastAlert />
        <Routes />
      </Provider>
    </>
  );
};

export default App;
