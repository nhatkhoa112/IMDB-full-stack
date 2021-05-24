import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authActions } from '../redux/actions';
import { ToastContainer } from 'react-toastify';

import {
  Card,
  RegisterContainer,
  FormRegister,
  FormGroup,
  FormLabel,
  FormControl,
  FormText,
  Button,
} from './elements/LoginElements';

function LoginPage() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login(user));
  };

  if (currentUser.isRedirect) {
    return <Redirect to="/" />;
  }

  return (
    <RegisterContainer>
      <ToastContainer />
      <h1>Login</h1>
      <Card>
        <FormRegister>
          <FormGroup controlId="formBasicEmail">
            <FormLabel>Email address</FormLabel>
            <FormControl
              type="email"
              placeholder="Enter email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <FormText className="text-muted">
              We'll never share your email with anyone else.
            </FormText>
          </FormGroup>

          <FormGroup controlId="formBasicPassword">
            <FormLabel>Password</FormLabel>
            <FormControl
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </FormGroup>
          <Nav.Link as={Link} to={'/register'}>
            If you don't have a account
          </Nav.Link>
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </FormRegister>
      </Card>
    </RegisterContainer>
  );
}

export { LoginPage };
