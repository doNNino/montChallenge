import React, { useEffect } from "react";
// Main scss file import
import "./App.scss";
// redux import
import { connect } from "react-redux";
// react router
import { BrowserRouter as Router, Route } from "react-router-dom";
// custom component imports
import Homepage from "./components/homepage/Homepage";
//redux actions imports

// start of the main app
function App(props) {
  // redux action functions destructuring

  // fetch the products

  // initial router for the app
  return (
    <Router>
      <Route exact path={["/home", "/"]} component={Homepage} />
    </Router>
  );
}
// redux state props function
const mapStateToProps = (state /* , ownProps*/) => {
  return {};
};
// redux action functions object
const mapDispatchToProps = {};
// default export of the app connected with redux
export default connect(mapStateToProps, mapDispatchToProps)(App);
