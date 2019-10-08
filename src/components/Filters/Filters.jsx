import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { typeColors } from '../Slot/SlotStyles';
import Button from '../Button';
import css from '@emotion/css';
import spacing from '../../util/spacing';
import mediaQueries from '../../util/mediaQueries';

export const filterTypes = [
  { label: 'Felles', type: 'common' },
  { label: 'Synlighet', type: 'digi' },
  { label: 'Dev', type: 'dev' },
];

const StyledFilters = styled.div`
  display: grid;
  width: 40%;
  grid-template-rows: ${spacing.large};
  grid-template-columns: 30% 30% 30%;
  margin: 0 auto;
  grid-column-gap: ${spacing.normal};
  @media (${mediaQueries.medium}) {
    width: 100%;
    margin-top: ${spacing.large};
  }
`;

const filledFilter = type => css`
  dipfont-weight: 700;
  border-radius: 5px;
  color: white;
  background-color: ${typeColors[type]};
`;

const outlinedFilter = type => css`
  font-weight: 700;
  border-radius: 5px;
  color: black;
  background-color: inherit;
  border: 2px solid ${typeColors[type]};
`;

const getStyle = (isHover, isActive, type) => {
  if (isHover) {
    return isActive ? outlinedFilter(type) : filledFilter(type);
  }
  return isActive ? filledFilter(type) : outlinedFilter(type);
};

const filterButtonStyle = (type = 'other', isActive = false) => css`
  &,
  &:focus {
    display: flex;
    justify-content: center;
    line-height: 1.8rem;
    ${getStyle(false, isActive, type)};
  }

  &:hover {
    display: flex;
    justify-content: center;
    line-height: 1.8rem;
    ${getStyle(true, isActive, type)};
  }
`;

const Filters = ({ activeFilters, onChangeActiveFilters }) => {
  return (
    <StyledFilters>
      {filterTypes.map(filter => (
        <Button
          key={filter.type}
          onClick={() => onChangeActiveFilters(filter.type)}
          appearance="stripped"
          css={filterButtonStyle(
            filter.type,
            activeFilters.includes(filter.type),
          )}>
          {filter.label}
        </Button>
      ))}
    </StyledFilters>
  );
};

Filters.propTypes = {
  activeFilters: PropTypes.arrayOf(PropTypes.string),
  onChangeActiveFilters: PropTypes.func.isRequired,
};

export default Filters;
