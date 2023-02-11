import { store } from "../store";
import { Provider } from "react-redux";
import "@/styles/globals.css";
import "@/styles/tailwind.css";

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <div className="h-screen bg-gray-900 text-gray-100">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
};

export default App;
