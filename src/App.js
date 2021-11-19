import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Addservice from "./Components/Addservice/Addservice";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Manageallorders from "./Components/Manageallorders/Manageallorders";
import Myorders from "./Components/Myorders/Myorders";
import Notfound from "./Components/Notfound/Notfound";
import PackageDetails from "./Components/package/PackageDetails/PackageDetails";
import Packages from "./Components/package/Packages/Packages";
import PrivetRoute from "./Components/PrivetRoute/PrivetRoute";
import Authprovider from "./Context/Authprovider/Authprovider";

function App() {
  return (
    <div className="App">
      <Authprovider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/package">
              <Packages></Packages>
            </Route>
            <PrivetRoute exact path="/package/:id">
              <PackageDetails></PackageDetails>
            </PrivetRoute>
            <PrivetRoute exact path="/myorders">
              <Myorders></Myorders>
            </PrivetRoute>
            <PrivetRoute exact path="/addservice">
              <Addservice></Addservice>
            </PrivetRoute>
            <PrivetRoute exact path="/manageallorders">
              <Manageallorders></Manageallorders>
            </PrivetRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </Authprovider>
    </div>
  );
}

export default App;
