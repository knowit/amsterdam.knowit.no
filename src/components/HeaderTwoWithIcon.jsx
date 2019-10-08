import React from 'react';
import styled from '@emotion/styled';

const StyledHeader = styled.h2`
  display: flex;
  align-items: center;
`;

const HeaderTwoWithIcon = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default HeaderTwoWithIcon;
