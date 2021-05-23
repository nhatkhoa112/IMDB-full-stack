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
  MovieDetail,
  CreateMoviePage,
  UpdateMoviePage,
} from './pages';

import { ProtectedRoute } from './components';

function App() {
  const [query, setQuery] = useState('');
  // const [sort, setSort] = useState('');

  return (
    <div className="App">
      <Navbar query={query} setQuery={setQuery} />
      <Switch>
        <Route exact path={`/login`} component={LoginPage} />
        <Route exact path={`/register`} component={RegisterPage} />
        <ProtectedRoute exact path={`/edit/:id`} component={UpdateUserPage} />
        <ProtectedRoute exact path={'/'} component={HomePage} />
        <ProtectedRoute
          exact
          path={`/movie/:id/detail`}
          component={MovieDetail}
        />
        <ProtectedRoute exact path={`/create`} component={CreateMoviePage} />
        <ProtectedRoute
          exact
          path={`/movie/:id/edit`}
          component={UpdateMoviePage}
        />

        <Route path={`/*`} component={FourOhFourPage} />
      </Switch>
    </div>
  );
}

export default App;
