import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './store/store'
import HomeComponent from './components/HomeComponent/HomeComponent'
import UserRegistrationComponent from './components/UserRegistrationComponent/UserRegistrationComponentContainer'
import { createBrowserHistory } from 'history'
import UserLoginComponent from './components/UserLoginComponent/UserLoginComponentContainer'
import PersonalAccountComponent from './components/PersonalAccountComponent/PersonalAccountComponent'
import HeaderComponent from './components/HeaderComponent/HeaderComponentContainer'

const history = createBrowserHistory()
const { store, persistor } = configureStore()

function App () {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <>
          <Router history={history}>
            <HeaderComponent />
            <Switch>
              <Route exact path='/' component={HomeComponent} />
              <Route path='/registration' component={UserRegistrationComponent} />
              <Route path='/login' component={UserLoginComponent} />
              <Route path='/personalAccount' component={PersonalAccountComponent} />
              <Route path='*' component={() => '404 NOT FOUND'} />
            </Switch>
          </Router>
        </>
      </PersistGate>
    </Provider>
  )
}

export default App
