
import React, { Component } from 'react';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import Login from './views/Login';
import Index from './views/Main';
import { Provider } from 'react-redux';
import store from './store';
class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
                <div className='wrapper center'>
                    <Route path='/' component={Login}></Route>
                    <Route path='/main' component={Index}></Route>
                </div>
            </Router>
        </Provider>

    );
  }
}

export default App;
