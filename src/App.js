
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import Nomatch from './Component/Nomatch/Nomatch';
// import AddProduct from './Component/AddProduct/AddProduct';
import Header from './Component/Header/Header';
import CheckOut from './Component/CheckOut/CheckOut';
import Login from './Component/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Orderd from './Component/Orderd/Orderd';
import Admin from './Component/Admin/Admin';
export const userContext = createContext();
function App() {
  const [loggedInUser,setLogedInUser] = useState({});
  return (

   <userContext.Provider value={[loggedInUser, setLogedInUser]}>
     <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <PrivateRoute path="/orderd">
          <Orderd />
        </PrivateRoute>
        <Route path="/home">
          <Home />
        </Route>
        <PrivateRoute path="/singleproduct/:key">
          <CheckOut />
        </PrivateRoute>
        
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/admin">
          <Admin />
        </PrivateRoute>
        <Route path="*">
            <Nomatch />
          </Route>
      </Switch>
  </Router>
  </userContext.Provider>
 
  );
}

export default App;
