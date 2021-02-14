import React, {Component}from 'react';
import logo from './logo.png';
import SignUP from './Signup';
import SignIN from './Signin';
import ListWish from './List_wishlist';
import {BrowserRouter as Router,Route} from "react-router-dom";

class App extends Component{
  render(){
    return (
      <div>
          <div>
          <Router>
            <Route path="/" exact component={SignUP}/>
            <Route path="/SignIN" exact component={SignIN}/>
            <Route path="/ListWish" exact component={ListWish}/>
          </Router>
          </div>
      </div>
    );
  }
}

export default App;
