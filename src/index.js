import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import Homepage from './Homepage';
import Details from './Details';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/films/title/:title" component={Details}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
