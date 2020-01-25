import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './store/store'
import homeComponent from './components/homeComponent/homeComponent'
import userRegistrationComponent from './components/userRegistrationComponent/userRegistrationComponentContainer'
import { createBrowserHistory } from 'history'
import userLoginComponent from './components/userLoginComponent/userLoginComponentContainer'
import personalAccountComponent from './components/personalAccountComponent/personalAccountComponent'
import HeaderComponent  from './components/headerComponent/headerComponent'

const history = createBrowserHistory()
const { store, persistor } = configureStore()

function App () {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <>
          <Router history={history}>
            <HeaderComponent/>
            <Switch>
              <Route exact path='/' component={homeComponent}/>
              <Route path='/registration' component={userRegistrationComponent}/>
              <Route path='/login' component={userLoginComponent}/>
              <Route path='/personalAccount' component={personalAccountComponent}/>
              <Route path='*' component={() => '404 NOT FOUND'}/>
            </Switch>
          </Router>
        </>
      </PersistGate>
    </Provider>
  )
}

export default App
