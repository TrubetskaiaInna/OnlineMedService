import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './store/store'
import homeComponent from './components/homeComponent/homeComponent'
import userRegistrationComponent from './components/userRegistrationComponent/userRegistrationComponentContainer'

import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

const { store, persistor } = configureStore()

function App () {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={homeComponent} />
          <Route exact path='/registration' component={userRegistrationComponent} />
        </Switch>
      </Router>
    </>
      </PersistGate>
    </Provider>
  )
}

export default App

