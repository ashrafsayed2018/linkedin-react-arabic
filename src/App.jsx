import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

import Home from "./components/Home";
import RequireAuth from "./components/RequireAuth";
import Header from "./components/Header";
import { getUserAuth } from "./redux/actions";
import { connect } from "react-redux";
const App = () => {
  useEffect(() => {}, []);
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Header />
                <Home />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUserAuth: () => dispatch(getUserAuth()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
