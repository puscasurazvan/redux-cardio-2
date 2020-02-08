import React from 'react'

import { createStore } from 'redux'

function App() {
  return (
    <div className="App">
      Hi
    </div>
  )
}

export default App

const defaultState = {
  welcome: 'Hello',
  otherState: 'some stuff'
}

const greeting = (state = defaultState, action) => {
  switch (action.type) {
    case 'GREET_ME':
      return { welcome: 'Hello Raz'}
    case 'GREET_WORLD':
      return { welcome: 'Hello World'}
    default:
      return state
  }
}

const store = createStore(greeting)

console.log(store.getState())
