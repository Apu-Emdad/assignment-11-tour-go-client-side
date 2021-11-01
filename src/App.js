import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ManageOrders from "./components/ManageOrders/ManageOrders";
import AddService from "./components/AddService/AddService";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import MyOrders from "./components/MyOrders/MyOrders";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ServiceDetail from "./components/Home/Services/ServiceDetail/ServiceDetail";
import Purchase from "./components/Home/Services/Purchase/Purchase";
import Footer from "./components/Footer/Footer";

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
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/services/:serviceId">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <PrivateRoute path="/manageorders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/purchase/:purchaseId">
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/addservice">
              <AddService></AddService>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
