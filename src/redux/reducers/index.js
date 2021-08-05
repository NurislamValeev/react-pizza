import {combineReducers} from "redux"

import pizzasReducer from "./pizzas"
import filtersReducer from "./filters"

const rootReducer = combineReducers({
  pizzasReducer,
  filtersReducer
})

export default rootReducer