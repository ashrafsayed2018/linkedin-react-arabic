import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}>
            login
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
