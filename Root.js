/**
 * Record Viewer React Native App
 */
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import recordviewer from './reducers'
import RecordViewerWrapper from './containers/RecordViewerWrapper'
import rootSaga from './sagas/rootSaga'

let sagaMiddleware = createSagaMiddleware()

let store = createStore(
  recordviewer,
  applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

const Root = () => {
  return (
    <Provider store={ store }>
      <RecordViewerWrapper />
    </Provider>
  )
}

export default Root
