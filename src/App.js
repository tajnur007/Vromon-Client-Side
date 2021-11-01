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
import Footer from './components/Footer/Footer';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <PrivateRoute exact path="/myOrders">
              <MyOrders />
            </PrivateRoute>
            <PrivateRoute exact path="/allOrders">
              <AllOrders />
            </PrivateRoute>
            <PrivateRoute exact path="/addPackage">
              <AddService />
            </PrivateRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
