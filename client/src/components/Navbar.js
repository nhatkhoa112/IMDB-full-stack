import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  Dropdown,
} from 'react-bootstrap';
import './styles/Navbar.css';
import { authActions } from '../redux/actions';

const NavigationBar = ({ query, setQuery }) => {
  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Nav.Link as={Link} to={'/'}>
          <Navbar.Brand href="#">IMDB</Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
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
                <button onClick={() => dispatch(authActions.signOut())}>
                  Sign out
                </button>
                <Link to={`/edit/${user.id}`}>Edit</Link>
                <button>Delete</button>
              </Dropdown.Menu>
            </Dropdown>

            <FormControl
              value={query}
              onChange={onChange}
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
