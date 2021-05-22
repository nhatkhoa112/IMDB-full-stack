import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import Navbar from './components/Navbar';

import {
  HomePage,
  RegisterPage,
  FourOhFourPage,
  LoginPage,
  UpdateUserPage,
} from './pages';

import { ProtectedRoute } from './components';

function App() {
  const [query, setQuery] = useState('');
  return (
    <div className="App">
      <Navbar query={query} setQuery={setQuery} />
      <Switch>
        <Route exact path={`/login`} component={LoginPage} />
        <Route exact path={`/register`} component={RegisterPage} />
        <ProtectedRoute exact path={`/edit/:id`} component={UpdateUserPage} />
        <ProtectedRoute exact path={'/'} component={HomePage} />
        <Route path={`/*`} component={FourOhFourPage} />
      </Switch>
    </div>
  );
}

export default App;
