import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {
  Card,
  RegisterContainer,
  FormRegister,
  FormGroup,
  FormLabel,
  FormControl,
  FormText,
  Button,
} from './elements/RegisterElements';
import { authActions } from '../redux/actions';

function RegisterPage() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    avatarUrl: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.register(user));
  };

  if (currentUser.isRedirect) {
    return <Redirect to="/" />;
  }

  return (
    <RegisterContainer>
      <h1>Register</h1>
      <Card>
        <FormRegister>
          <FormGroup controlId="formBasicName">
            <FormLabel>Name</FormLabel>
            <FormControl
              type="text"
              placeholder="Enter your name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </FormGroup>
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

          <FormGroup controlId="formBasicAvatarUrl">
            <FormLabel>Avatar Url</FormLabel>
            <FormControl
              type="text"
              placeholder="Enter your Avatar Url"
              value={user.avatarUrl}
              onChange={(e) => setUser({ ...user, avatarUrl: e.target.value })}
            />
          </FormGroup>

          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </FormRegister>
      </Card>
    </RegisterContainer>
  );
}

export { RegisterPage };
