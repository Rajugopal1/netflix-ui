import "./app.scss";
import Home from "./page/Home/Home";
import Signup from "./page/signup/Signup";
import Watch from "./page/watch/Watch";
import Login from "./page/login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Home /> : <Navigate to="/signup" replace={true} />}
        />
        <Route
          exact
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" replace={true} />}
        />
        <Route
          exact
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" replace={true} />}
        />
        {user && (
          <>
            <Route exact path="/movies" element={<Home type="movies" />} />
            <Route exact path="/series" element={<Home type="series" />} />
            <Route exact path="/watch" element={<Watch />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
