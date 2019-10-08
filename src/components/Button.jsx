import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import colors from '../util/colors';
import darken from 'polished/lib/color/darken';

const hoverStyle = css`
  background-color: ${darken(0.1, colors.blue)};
  border: 1px solid ${darken(0.1, colors.blue)};
  color: white;
`;

const strippedStyle = css`
  transition: background-color none;
  padding: 0;
  border-radius: 0;
  font-size: 1em;
  color: inherit;
  background-color: transparent;
  outline: none;
  border: none;
  display: inline-block;
  box-shadow: none;
`;

const appearances = {
  stripped: css`
    ${strippedStyle};
    &:hover,
    &:focus {
      ${strippedStyle};
    }
  `,
  outline: css`
    background-color: white;
    color: ${colors.blue};

    &:hover,
    &:focus {
      background-color: ${colors.blue};
      border-color: ${colors.blue};
      color: white;
    }
  `,
  active: hoverStyle,
};
export const StyledButton = styled.button`
  padding: 0.8rem 3rem;
  background-color: ${colors.blue};
  border: 1px solid ${colors.blue};
  color: white;
  font-size: 1.2rem;
  font-weight: 100;
  font-family: 'Raleway', sans-serif;
  border-radius: 30px;
  &:hover,
  &:focus {
    ${hoverStyle};
  }
  ${p => p.appearance && appearances[p.appearance]};
}
`;

const Button = ({ appearance, children, ...rest }) => (
  <StyledButton appearance={appearance} {...rest}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  appearance: PropTypes.string,
  arrowBottom: PropTypes.bool,
};

export default Button;
