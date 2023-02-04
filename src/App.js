import React from "react";
import {
  Header,
  Sidebar,
  Main,
  Watch,
  PreviewChannel,
} from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <Switch>
       <div className="home">
        
         <Route exact path="/">
            <Header />
            <div className="app">
            <Sidebar/>
            <Main />
            </div>
          </Route>

          <Route path="/preview">
            <Header />
            <div className="app">
            <Sidebar changeWidth/>
            <PreviewChannel/>
             </div>
          </Route>

          <Route path="/watch">
           <Header />
            <Watch/>
          </Route>


        </div>
      </Switch>
    </Router>
   
  );
}

export default App;
