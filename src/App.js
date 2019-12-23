import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import { NavigationBar } from "./components/NavigationBar.jsx";
import { Layout } from "./components/Layout.jsx";
import { Jumbotron } from "./components/Jumbotron.jsx";
import { Footer } from "./components/Footer.jsx";

//Pages
import { HomePage } from "./components/HomePage.jsx";
import { AboutPage } from "./components/AboutPage.jsx";
import { ContactPage } from "./components/ContactPage.jsx";
import { NoMatchPage } from "./components/NoMatchPage.jsx";

function App() {
  return (
    <Fragment>
      <Router>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route component={NoMatchPage} />
          </Switch>
        </Layout>
      </Router>
      <Footer />
    </Fragment>
  );
}

export default App;
