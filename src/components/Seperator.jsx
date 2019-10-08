import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledSvg = styled.svg`
  display: block;
  margin-bottom: -1px;
  margin-top: -1px;
`;

const SectionSeparator = ({
  position,
  previousSectionColor,
  nextSectionColor,
  ...rest
}) => {
  if (position === 'bottom') {
    return (
      <StyledSvg
        {...rest}
        viewBox="0 0 1024 76"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(0.000000, -1005.000000)">
            <g transform="translate(512.000000, 1043.000000) rotate(-180.000000) translate(-512.000000, -1043.000000) translate(0.000000, 1005.000000)">
              <polygon
                fill="#33C6FC"
                transform="translate(512.000000, 41.000000) scale(1, -1) translate(-512.000000, -41.000000) "
                points="-1.13686838e-13 6 -1.25055521e-12 76 1024 76 1024 59"
              />
              <polygon
                fill="#3277F8"
                points="-1.13686838e-13 2 0 50 1024 49.5 1024 2"
              />
              <polygon
                fill="#28334A"
                points="0 0 1.02318154e-12 14.3333333 1024 59.5 1024 0"
              />
            </g>
          </g>
        </g>
      </StyledSvg>
    );
  }
  return (
    <StyledSvg
      {...rest}
      viewBox="0 0 1024 84"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(0.000000, -465.000000)">
          <g transform="translate(0.000000, 465.000000)">
            <polygon
              fill="#33C6FC"
              transform="translate(512.000000, 44.416667) scale(1, -1) translate(-512.000000, -44.416667) "
              points="-2.40172465e-15 5.33333333 0 83.5 1024 83.5 1024 65.8333333"
            />
            <polygon fill="#3277F8" points="0 2 0 49.5 1024 49.5 1024 2" />
            <polygon
              fill={previousSectionColor || '#28334A'}
              points="0 0 0 5.33333333 1024 59.5 1024 0"
            />
          </g>
        </g>
      </g>
    </StyledSvg>
  );
};

SectionSeparator.propTypes = {
  position: PropTypes.string,
  previousSectionColor: PropTypes.string,
  nextSectionColor: PropTypes.string,
};

SectionSeparator.defaultProps = {
  position: 'top',
};

export default SectionSeparator;
