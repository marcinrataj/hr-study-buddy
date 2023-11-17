import React from 'react';
import propTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper } from './UsersListItem.styles';

const UsersListItem = ({ userData: { average, name, attendance } }) => (
  <Wrapper>
    <div>{average}</div>
    <div>
      <p>{name} </p>
      <p>{attendance}</p>
    </div>
    <Button />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: propTypes.shape({
    average: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    attendance: propTypes.string,
  }),
};

export default UsersListItem;
