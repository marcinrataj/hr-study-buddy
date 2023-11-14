import React from 'react';
import propTypes from 'prop-types';

const UsersListItem = ({ userData: { average, name, attendance } }) => (
  <li>
    <div>{name}</div>
    <div>
      <p>{average} </p>
      <p>{attendance}</p>
    </div>
    <button>X</button>
  </li>
);

UsersListItem.propTypes = {
  userData: propTypes.shape({
    average: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    attendance: propTypes.string,
  }),
};

export default UsersListItem;
