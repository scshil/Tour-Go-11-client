import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";

import Searvice from "./Components/Searvice/Searvice";
import Mainpage from "./Components/MainPage/Mainpage";
import Login from "./Components/Login/Login";
import Addservice from "./Components/Addservice/Addservice";
import Services from "./Components/Services/Services";
import Servicedetails from "./Components/Servicedetails/Servicedetails";
import Winteroffer from "./Components/Winteroffer/Winteroffer";
import Purchesitem from "./Components/PurchesItem/Purchesitem";
import Notfound from "./Components/404/Notfound";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Mainpage></Mainpage>
          </Route>
          <Route exact path="/home">
            <Mainpage></Mainpage>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/winter">
            <Winteroffer></Winteroffer>
          </Route>
          <Route exact path="/services/:id">
            <Servicedetails></Servicedetails>
          </Route>
          <Route exact path="/purchesitem/:email">
            <Purchesitem></Purchesitem>
          </Route>

          {/*  */}
          <Route exact path="/addservice">
            <Addservice></Addservice>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
