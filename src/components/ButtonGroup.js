import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledButtonGroup = styled.div`
  display: grid;
  grid-template-columns: ${p =>
    `repeat(${p.numberOfButtons}, auto [col-start])`};
  grid-column-gap: 10px;
  ${p => (p.overflow ? `overflow: ${p.overflow}` : '')};
`;

const ButtonGroup = ({ children, ...rest }) => {
  return <StyledButtonGroup {...rest}>{children}</StyledButtonGroup>;
};

ButtonGroup.propTypes = {
  css: PropTypes.string,
  numberOfButtons: PropTypes.number.isRequired,
};

export default ButtonGroup;
