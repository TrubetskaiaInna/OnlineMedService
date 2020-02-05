import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './store/store'
import HomeComponent from './components/Home/HomeContainer'
import UserRegistrationComponent from './components/UserRegistration/UserRegistrationContainer'
import { createBrowserHistory } from 'history'
import UserLoginComponent from './components/UserLogin/UserLoginContainer'
import PersonalAccountComponent from './components/PersonalAccount/PersonalAccountContainer'
import HeaderComponent from './components/Header/HeaderContainer'
import AboutUsComponent from './components/AboutUs/AboutUsContainer'
import Data from './components/Data/Data'
import Contact from './components/Contact/Contact'
import Entry from './components/Entry/EntryContainer'

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
              <Route path='/about' component={AboutUsComponent} />
              <Route path='/registration' component={UserRegistrationComponent} />
              <Route path='/login' component={UserLoginComponent} />
              <Route path='/personalAccount' component={PersonalAccountComponent} />
              <Route path='/data' component={Data}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/entry' component={Entry}/>
              <Route path='*' component={() => '404 NOT FOUND'} />
            </Switch>
          </Router>
        </>
      </PersistGate>
    </Provider>
  )
}

export default App
