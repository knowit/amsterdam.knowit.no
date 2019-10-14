import React from 'react';
import styled from '@emotion/styled';
import Person from '@material-ui/icons/Person';
import mediaQueries from '../../util/mediaQueries';
import SpeakerFavourites from './SpeakerFavourites';

const StyledSpeakerContainer = styled.div`
  display: grid;
  align-content: start;
  grid-template-rows: max-content auto auto;
  grid-template-columns: 30% 35% 35%;
  align-items: center;
  grid-template-areas:
    'image title   title '
    'image content content';

  @media (${mediaQueries.medium}) {
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: 100%;
    align-items: center;
    grid-template-areas:
      'image'
      'title'
      'content';
  }
`;

const StyledTitle = styled.h2`
  grid-area: title;
  align-self: start;
  margin-top: 0;
`;

const StyledDescription = styled.span`
  align-self: start;
  flex: 0 0 100%;
`;

const StyledSpeakerRecreation = styled.span`
  align-self: start;
  flex: 1;
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

const StyledContent = styled.div`
  grid-area: content;
  align-self: start;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
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
      <StyledContent>
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
      </StyledContent>
    </StyledSpeakerContainer>
  );
};

export default Speaker;
