import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import colors from '../../util/colors';
import Button from '../Button';
import css from '@emotion/css';
import spacing from '../../util/spacing';
import styled from '@emotion/styled-base';

const StyledFavoriteIcon = styled(FavoriteIcon)`
  color: ${colors.heartRed};
`;

const StyledFavoriteText = styled('b')`
  display: block;
`;

const StyledFavoriteBorder = styled(FavoriteBorder)`
  color: ${colors.grey};

  &:hover,
  &:focus {
    color: ${colors.heartRed};
  }
`;

const AddFavorite = ({ title, date, startTime, setFavorites, favorites }) => {
  const uniqueSlotIdentifier = `${date}_${startTime}_${title}`;
  const isFavoriteActive = !!favorites.find(
    fav => fav === uniqueSlotIdentifier,
  );
  const changeFavorites = () => {
    if (isFavoriteActive) {
      const updatedCookie = favorites.filter(
        favorite => favorite !== uniqueSlotIdentifier,
      );
      setFavorites(updatedCookie);
    } else {
      const newFavorites = [...favorites, uniqueSlotIdentifier];
      setFavorites(newFavorites);
    }
  };

  return (
    <Button
      appearance="stripped"
      onClick={changeFavorites}
      css={css`
        margin-right: ${spacing.small};
      `}>
      {isFavoriteActive ? (
        <StyledFavoriteIcon fontSize="large" />
      ) : (
        <StyledFavoriteBorder fontSize="large" />
      )}
      <StyledFavoriteText>
        {isFavoriteActive ? 'Fjern' : 'Lagre'}
      </StyledFavoriteText>
    </Button>
  );
};

export default AddFavorite;
