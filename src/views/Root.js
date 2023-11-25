import React, { useState } from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.style';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Form from 'components/organisms/Form/Form';
import { users as userData } from 'data/users';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const Root = () => {
  const [users, setUsers] = useState(userData);
  const [formValues, setformValues] = useState({
    name: '',
    attendance: '',
    average: '',
  });

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    // przekazanie wartości z inputa do stanu
    console.log(formValues);
    setformValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };
    setUsers([...users, newUser]);
    setformValues(initialFormState);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/add-user"> Add user</Link>
          </nav>
          <Switch>
            <Route path="/" exact>
              <UsersList deleteUser={deleteUser} users={users} />
            </Route>
            <Route path="/add-user" exact>
              <Form formValues={formValues} handleAddUser={handleAddUser} handleInputChange={handleInputChange} />
            </Route>
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
