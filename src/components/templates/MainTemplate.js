import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from '../templates/MainTemplate.styles';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
