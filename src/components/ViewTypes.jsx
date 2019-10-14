import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import ViewWeek from '@material-ui/icons/ViewWeek';
import MoreVert from '@material-ui/icons/MoreVert';
import Button from './Button';
import css from '@emotion/css';
import spacing from '../util/spacing';
import mediaQueries from '../util/mediaQueries';
import colors from '../util/colors';

const StyledViewTypes = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: ${spacing.large};
  @media (${mediaQueries.medium}) {
    display: none;
  }
`;

const filledViewType = type => css`
  dipfont-weight: 700;
  color: white;
`;

const outlinedViewType = type => css`
  font-weight: 700;
  color: ${colors.blue};
  background-color: transparent;
  border: 1px solid ${colors.blue};
`;

const getStyle = (isHover, isActive) => {
  if (isHover) {
    return isActive ? outlinedViewType() : filledViewType();
  }
  return isActive ? filledViewType() : outlinedViewType();
};

const viewTypeStyle = (isActive = false) => css`
  padding: 0 3rem;
  padding-top: 0.2rem;
  border-radius: 0;
  ${getStyle(false, isActive)}
`;

const types = [
  { type: 'column', icon: <ViewWeek /> },
  {
    type: 'row',
    icon: (
      <ViewWeek
        css={css`
          transform: rotate(90deg);
        `}
      />
    ),
  },
];

const ViewTypes = ({ currentViewType, onChangeViewType }) => {
  return (
    <StyledViewTypes>
      {types.map(viewType => (
        <Button
          key={viewType.type}
          onClick={() => onChangeViewType(viewType.type)}
          css={viewTypeStyle(currentViewType === viewType.type)}>
          {viewType.icon}
        </Button>
      ))}
    </StyledViewTypes>
  );
};

ViewTypes.propTypes = {
  currentViewType: PropTypes.string.isRequired,
  onChangeViewType: PropTypes.func.isRequired,
};

export default ViewTypes;
