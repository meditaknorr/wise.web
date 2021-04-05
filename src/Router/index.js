import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from '../Pages/Home/index';
import Contact from '../Pages/Contact/index';

export default function() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route component={Error}></Route> // Error Page
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  )
}
