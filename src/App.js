import './App.css';
import { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './components/Login'
import Signup from './components/Signup'

import Admin from './components/Admin'
import StoreOwner from './components/StoreOwner'
import NormalUser from './components/NormalUser'
import AddNewStore from './components/AddNewStore'
import AddNewUser from './components/AddNewUser'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/store-owner" component={StoreOwner} />
          <Route exact path="/user" component={NormalUser} />
          <Route exact path="/admin/add-store" component={AddNewStore} />
          <Route exact path="/admin/add-user" component={AddNewUser} />
        </Switch>
      </BrowserRouter>
    )
  }
}



export default App;
