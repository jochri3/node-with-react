import React from 'react';
import Home from './pages/home';
import Posts from './pages/posts/';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/posts' component={Posts} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
