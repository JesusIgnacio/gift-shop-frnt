import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './shop-homepage.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from "./App";
import GiftDetail from "./components/GiftDetail"


const routing = (
  <Router>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <Link to="/">Gift Shop</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
    <Route exact path="/" component={App}></Route>
    <Route path="/:id" component={GiftDetail}></Route>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));
