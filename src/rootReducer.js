import { combineReducers } from 'redux'

import toggle from './components/toggle/reducer'
import movies from './components/movies/reducer'

const rootReducer = combineReducers({
  toggle,
  movies
})

export default rootReducer