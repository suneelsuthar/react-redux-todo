import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../../Containers/Home/Home'

function BasicExample() {
  return (
    <Router>
        <Route path="/" component={Home} />
    </Router>
  );
}
export default BasicExample