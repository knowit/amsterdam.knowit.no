import React from 'react';
import styled from '@emotion/styled';
import SafeLink from '../components/SafeLink';
import colors from '../util/colors';
import spacing from '../util/spacing';

const StyledNavigationContainer = styled.div`
  width: 100%;
  text-align: center;
  position: fixed;
  z-index: 3;
  top: 0px;
  left: 0px;
  right: 0px;
  border-bottom: 3px solid ${colors.blueDarkest};
  background-color: ${colors.blueDark};
`;

const StyledNavigation = styled.div`
  color: white;
  justify-content: center;
  display: grid;
  grid-column-gap: ${spacing.normal};
  grid-template-columns: repeat(3, ${spacing.spacingUnit * 6}px [col-start]);
`;

const StyledPushElement = styled.div`
  height: ${spacing.small};
  padding: ${spacing.small} 0;
`;

const routes = [
  { to: '/', title: 'Amsterdam 2019' },
  { to: '/schedule', title: 'Program' },
  { to: '/favorites', title: 'Favoritter' },
];

const StyledSafeLink = styled(SafeLink)`
  justify-self: center;
  padding: ${spacing.small} 0;
`;

const Navigation = () => {
  return (
    <>
      <StyledNavigationContainer>
        <StyledNavigation>
          {routes.map(route => (
            <StyledSafeLink
              key={route.to}
              to={route.to}
              activeStyle={{
                borderBottom: `3px solid ${colors.blue}`,
                marginBottom: '-3px',
              }}>
              {route.title}
            </StyledSafeLink>
          ))}
        </StyledNavigation>
      </StyledNavigationContainer>
      <StyledPushElement />
    </>
  );
};

export default Navigation;
