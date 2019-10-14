import React from 'react';
import styled from '@emotion/styled';
import css from '@emotion/css';
import spacing from '../../util/spacing';

const StyledSpeakerFavourites = styled.div`
  align-self: start;
  margin: 0;
  flex: 1;
  margin-right: ${spacing.normal};

  & > h2 {
    margin-left: 0;
  }
`;

const StyledList = styled.ul`
  margin: 0;
`;

const favouriteCategories = [
  'Mat',
  'Musikksjanger',
  'Reisemål',
  'Film/serie',
  'Sted',
];

const SpeakerFavourites = ({ speaker_favourites }) => {
  if (!speaker_favourites) {
    return null;
  }
  const splittedFavourites = speaker_favourites
    .split(';')
    .map((favourite, index) => {
      if (favourite.length === 0) {
        return null;
      }
      return (
        <>
          <strong>{`${favouriteCategories[index]}: `}</strong>
          <span>{favourite}</span>
        </>
      );
    })
    .filter(favourite => favourite);
  return (
    <StyledSpeakerFavourites>
      <h2
        css={css`
          padding-left: 0;
        `}>
        Hva liker du?
      </h2>
      <StyledList>
        {splittedFavourites.map((favourite, index) => (
          <li key={`favourite_${index}`}>{favourite}</li>
        ))}
      </StyledList>
    </StyledSpeakerFavourites>
  );
};

export default SpeakerFavourites;
