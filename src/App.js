import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import FastestDelivery from './pages/FastestDelivery/FastestDelivery';
import Login from './pages/Login/Login';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import MyOrders from './pages/MyOrders/MyOrders';
import AddServices from './pages/AddServices/AddServices';
import ManageOrders from './pages/ManageOrders/ManageOrders';
import Footer from './pages/Footer/Footer';
import WhyChoose from './pages/WhyChoose/WhyChoose';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/delivery">
              <FastestDelivery></FastestDelivery>
            </Route>
            <PrivateRoute path="/services/:id">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>

            <Route path="/myOrders">
              <MyOrders></MyOrders>
            </Route>

            <PrivateRoute path="/addOrders">
              <AddServices></AddServices>
            </PrivateRoute>
            <PrivateRoute path="/manageOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <Route path="/choose">
              <WhyChoose></WhyChoose>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
