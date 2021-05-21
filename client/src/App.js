import { Route, Switch } from 'react-router-dom';

import './App.css';

import { HomePage, RegisterPage, FourOhFourPage, LoginPage } from './pages';

import { ProtectedRoute } from './components';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={`/login`} component={LoginPage} />
        <Route exact path={`/register`} component={RegisterPage} />
        <ProtectedRoute exact path={'/'} component={HomePage} />
        <Route path={`/*`} component={FourOhFourPage} />
      </Switch>
    </div>
  );
}

export default App;
