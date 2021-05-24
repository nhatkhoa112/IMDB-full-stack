import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Container,
  Dropdown,
} from 'react-bootstrap';
import './styles/Navbar.css';
import { authActions } from '../redux/actions';
import { movieActions } from '../redux/actions';

const NavigationBar = ({ query, setQuery }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(movieActions.getAll(1, 20, query));
  };
  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Nav.Link as={Link} to={'/'}>
          <Navbar.Brand href="#">IMDB</Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex" onSubmit={onSubmit}>
            {user.id ? (
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic2">
                  Movie actions
                </Dropdown.Toggle>
                <Dropdown.Menu id="movies">
                  <Link to={`/create`}>Create new movie</Link>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              ''
            )}
            {user.id ? (
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <div className="user-form">
                    <img
                      src={user.avatarUrl}
                      alt="avatar"
                      style={{ width: '50px', height: '50px' }}
                    />
                    <div className="content"> {user.name} </div>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <button
                    onClick={() => {
                      dispatch(authActions.signOut());
                      setQuery('');
                    }}
                  >
                    Sign out
                  </button>
                  <Link to={`/edit/${user.id}`}>Edit</Link>
                  <button>Delete</button>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              ''
            )}

            <FormControl
              value={query}
              onChange={onChange}
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
