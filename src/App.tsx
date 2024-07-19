import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoginForm from "./components/Form";
import Home from "./components/Home";

function App() {
  return (
    <div className="min-h-screen bg-[#131319] flex flex-col items-center justify-center">
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
