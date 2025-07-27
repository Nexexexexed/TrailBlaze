import { Header } from "../widgets/index";
import Router from "./router/Router";
import "./global.css";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Router />
    </div>
  );
};

export default App;
