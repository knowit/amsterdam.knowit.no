import React from 'react';
import styled from '@emotion/styled';
import Person from '@material-ui/icons/Person';
import mediaQueries from '../../util/mediaQueries';
import SpeakerFavourites from './SpeakerFavourites';

const StyledSpeakerContainer = styled.div`
  display: grid;
  overflow-y: scroll;
  align-content: start;
  grid-template-rows: max-content auto auto;
  grid-template-columns: 30% 35% 35%;
  align-items: center;
  grid-template-areas:
    'image title       title '
    'image description description'
    '.     recreation  favourites';

  @media (${mediaQueries.medium}) {
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: 100%;
    align-items: center;
    grid-template-areas:
      'image'
      'title'
      'description'
      'recreation'
      'favourites';
  }
`;

const StyledTitle = styled.h2`
  grid-area: title;
  align-self: start;
  margin-top: 0;
`;

const StyledDescription = styled.span`
  grid-area: description;
  align-self: start;
`;

const StyledSpeakerRecreation = styled.span`
  grid-area: recreation;
  align-self: start;
`;

const StyledImage = styled.img`
  grid-area: image;
  max-width: 75%;
  align-self: start;

  @media (${mediaQueries.medium}) {
    max-width: 100%;
  }
`;

const StyledIcon = styled.span`
  grid-area: image;
  align-self: start;
  & > svg {
    font-size: 15rem;
  }

  @media (${mediaQueries.medium}) {
    & > svg {
      display: none;
    }
  }
`;

const Speaker = ({
  slot: {
    userIds,
    speaker_bio,
    speaker_image,
    speaker_favourites,
    speaker_recreation,
  },
}) => {
  const imageUrl =
    speaker_image &&
    speaker_image.localFiles &&
    speaker_image.localFiles[0] &&
    speaker_image.localFiles[0].publicURL;
  return (
    <StyledSpeakerContainer>
      {imageUrl ? (
        <StyledImage src={imageUrl} />
      ) : (
        <StyledIcon>
          <Person fontSize="large" />
        </StyledIcon>
      )}
      <StyledTitle>{userIds}</StyledTitle>
      <StyledDescription>
        {speaker_bio ||
          'Vi har dessverre ingen beskrivelse på denne personen :('}
      </StyledDescription>
      <SpeakerFavourites speaker_favourites={speaker_favourites} />
      {speaker_recreation && (
        <StyledSpeakerRecreation>
          <h2>Hva gjør du på fritida?</h2>
          <p>{speaker_recreation}</p>
        </StyledSpeakerRecreation>
      )}
    </StyledSpeakerContainer>
  );
};

export default Speaker;
