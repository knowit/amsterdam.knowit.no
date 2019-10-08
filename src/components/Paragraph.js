import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import colors from '../util/colors';

const StyledParagraph = styled.p`
  color: ${p => p.color || colors.blueDark};
`;

const Paragraph = ({ color, children }) => (
  <StyledParagraph color={color}>{children}</StyledParagraph>
);

Paragraph.propTypes = {
  color: PropTypes.string,
};

export default Paragraph;
