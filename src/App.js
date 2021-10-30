import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Destinations from './components/Destinations/Destinations';
import Packages from './components/Packages/Packages';
import ContactUs from './components/ContactUs/ContactUs';
import Gallary from './components/Gallary/Gallary';
import MyOrders from './components/MyOrders/MyOrders';
import AllOrders from './components/AllOrders/AllOrders';
import AddService from './components/AddService/AddService';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/destinations">
            <Destinations />
          </Route>
          <Route exact path="/packages">
            <Packages />
          </Route>
          <Route exact path="/contacts">
            <ContactUs />
          </Route>
          <Route exact path="/gallary">
            <Gallary />
          </Route>
          <Route exact path="/myOrders">
            <MyOrders />
          </Route>
          <Route exact path="/allOrders">
            <AllOrders />
          </Route>
          <Route exact path="/addService">
            <AddService />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
