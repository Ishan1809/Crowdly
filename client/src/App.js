import Home from "./pages/home/home"
import Profile from "./pages/profile/profile"
import Login from "./pages/login/login"
import Register from "./pages/register/register"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


function App() {

  const user = useContext(AuthContext);
  // const user = null
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={user ? <Home />: <Navigate to="/login" />} />
      <Route path='/login' element={user ? <Navigate to="/" /> : <Login/>} />
      <Route path='/register' element={user ? <Navigate to="/" /> : <Register/>} />
      <Route path='/:username' element={<Profile/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
