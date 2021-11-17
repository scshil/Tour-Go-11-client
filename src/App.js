import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Addservice from "./Components/Addservice/Addservice";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import PackageDetails from "./Components/package/PackageDetails/PackageDetails";
import Packages from "./Components/package/Packages/Packages";
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
            <Route exact path="/package">
              <Packages></Packages>
            </Route>
            <Route exact path="/package/:id">
              <PackageDetails></PackageDetails>
            </Route>
            <Route exact path="/addservice">
              <Addservice></Addservice>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </Authprovider>
    </div>
  );
}

export default App;
