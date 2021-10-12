import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { connectRoutes } from 'redux-first-router'

import reducers from './reducers'
import options from './Options'

const routesMap = {
  HOME: '/',
  LOGIN: '/login'
}

const { reducer, middleware, enhancer } = connectRoutes(routesMap, options)

const rootReducer = combineReducers({ location: reducer, ...reducers })
const middlewares = applyMiddleware(thunk, middleware)
const enhancers = compose(enhancer, middlewares)

const store = createStore(rootReducer, enhancers)

export default store

export type RootState = ReturnType<typeof rootReducer>