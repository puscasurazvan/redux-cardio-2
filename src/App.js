import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import logo from './logo.svg'
import './App.css'

import MoviesList from './components/MoviesList'
import MovieDetail from './components/MovieDetail'
import Toggle from './components/Toggle'

import rootReducer from './redux/rootReducer'

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(),
  )

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <Toggle />
        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path="/:id" component={MovieDetail} />
        </Switch>
      </div>
    </Router>
  </Provider>
)

export default App
