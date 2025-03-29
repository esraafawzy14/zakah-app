import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import './App.css';
import Header from "./Header";
import Main from './Main';
import Zkfitr from './Zk-fitr';
import Zkmoney from "./Zk-money";
import Zkgs from "./Zk-gs";
import Zkani from "./Zk-ani";
import Zkbus from "./Zk-bus";
import Zkani2 from "./Zk-ani2";
import Zkpl from "./Zk-pl";

function App() {
  return (
    <Router>  
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/Main" />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Zk-fitr" element={<Zkfitr />} />
          <Route path="/Zk-money" element={<Zkmoney />} />
          <Route path="/Zk-gs" element={<Zkgs />} />
          <Route path="/Zk-ani" element={<Zkani />} />
          <Route path="/Zk-bus" element={<Zkbus />} />
          <Route path="/Zk-ani2" element={<Zkani2 />} />
          <Route path="/Zk-pl" element={<Zkpl />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
