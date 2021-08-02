import { Provider } from "react-redux";
import { store } from "./redux";
import Router from "./router";

function App() {
  const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:3000";

  console.log(baseUrl);
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
