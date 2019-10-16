import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import ViewWeek from '@material-ui/icons/ViewWeek';
import Button from './Button';
import css from '@emotion/css';
import mediaQueries from '../util/mediaQueries';
import colors from '../util/colors';

const StyledViewTypes = styled.div`
  display: flex;
  justify-content: center;
  @media (${mediaQueries.medium}) {
    display: none;
  }
`;

const ViewTypes = ({ currentViewType, onChangeViewType }) => {
  const oppositeType = currentViewType === 'row' ? 'column' : 'row';
  return (
    <StyledViewTypes>
      <Button
        appearance="stripped"
        css={css`
          &,
          &:hover,
          &:focus {
            display: flex;
            align-items: center;
          }
        `}
        onClick={() => onChangeViewType(oppositeType)}>
        <span>Bytt vising: </span>
        <ViewWeek
          fontSize="large"
          css={css`
            color: ${colors.blue};
            transform: rotate(${currentViewType === 'row' ? 90 : 0}deg);
            transition: transform 0.2s linear;
            &:hover {
              color: ${colors.blueDark};
            }
          `}
        />
      </Button>
    </StyledViewTypes>
  );
};

ViewTypes.propTypes = {
  currentViewType: PropTypes.string.isRequired,
  onChangeViewType: PropTypes.func.isRequired,
};

export default ViewTypes;
