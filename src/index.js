import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { 
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import About from './pages/about'
import Home from './pages/home'
import Contact from './pages/contact'
import Listings from './pages/listings'

ReactDOM.render(
  <MuiThemeProvider>
    <Router>
      <App>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />  
          <Route path="/listings" component={Listings} />  
          <Route render={() => <h1>Page Not Found </h1>} />
        </Switch>
      </App>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
