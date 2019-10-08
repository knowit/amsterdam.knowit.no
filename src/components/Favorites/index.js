import React from 'react';
import styled from '@emotion/styled';
import colors from '../../util/colors';
import spacing from '../../util/spacing';
import NextUp from './NextUp';
import Favorites from './Favorites';

const StyledTwoColumn = styled.div`
  min-height: 30vh;
  & > div:first-child {
    border-right: 2px solid ${colors.blue};
  }
`;

const TwoColumnInfo = ({ favorites }) => {
  return (
    <StyledTwoColumn>
      <NextUp />
      <Favorites favorites={favorites} />
    </StyledTwoColumn>
  );
};

export default TwoColumnInfo;
