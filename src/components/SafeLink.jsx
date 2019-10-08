import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { css } from '@emotion/core';
import { oldColors } from '../util/colors';

const linkStyle = (hoverColor = oldColors.primary) => css`
  background-color: transparent;
  text-decoration: none;
  color: white;

  &:hover,
  &:focus {
    color: white;
  }
`;

const SafeLink = ({ to, children, hoverColor, ...rest }) => {
  if (to) {
    return (
      <Link to={to} css={linkStyle(hoverColor)} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a css={linkStyle} {...rest}>
      {children}
    </a>
  );
};

SafeLink.propTypes = {
  to: PropTypes.string,
  hoverColor: PropTypes.string,
};

export default SafeLink;
