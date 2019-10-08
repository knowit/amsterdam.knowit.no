import styled from '@emotion/styled';
import css from '@emotion/css';
import colors from '../../util/colors';
import mediaQueries from '../../util/mediaQueries';
import spacing from '../../util/spacing';

export const typeColors = {
  common: colors.blueDark,
  dev: colors.green,
  digi: colors.blue,
};

const gridTemplates = {
  dev: {
    desktop: css`
      grid-template-rows: auto;
      grid-template-columns: 10% auto 10%;
      grid-template-areas:
        'time     title       favorite'
        'duration description favorite'
        '.        speakers    speakers'
        '.        room        room';
    `,
    mobile: css`
      grid-template-rows: auto auto auto auto auto auto;
      grid-template-columns: 70% 30%;
      grid-template-areas:
        'time        favorite'
        'duration    favorite'
        'title       title'
        'description description'
        'speakers    speakers'
        'room        room';
    `,
  },
  digi: {
    desktop: css`
      grid-template-rows: auto;
      grid-template-columns: 10% auto 10%;
      grid-template-areas:
        'time     title       favorite'
        'duration description favorite'
        '.        speakers    speakers'
        '.        room        room';
    `,
    mobile: css`
      grid-template-rows: auto auto auto auto auto auto;
      grid-template-columns: 70% 30%;
      grid-template-areas:
        'time        favorite'
        'duration    favorite'
        'title       title'
        'description description'
        'speakers    speakers'
        'room        room';
    `,
  },
  common: {
    desktop: css`
      grid-template-rows: auto auto;
      grid-template-columns: 10% auto 10%;
      align-items: center;
      grid-template-areas:
        'time title favorite'
        'time    title    favorite'
        '-    room     room';
    `,
    mobile: css`
      grid-template-rows: auto auto auto;
      grid-template-columns: 70% 30%;
      grid-template-areas:
        'time  favorite'
        '.     favorite'
        'title title'
        'room room';
    `,
  },
};

export const StyledSlotGridWrapper = styled.div`
  margin-top: ${spacing.large};
  display: grid;
  background-color: white;
  border-radius: 5px;
  grid-template-rows: auto;
  grid-template-columns: ${spacing.small} auto;
  grid-template-areas: 'type allContent';

  &:last-child {
    margin-bottom: ${spacing.large};
  }

  @media (${mediaQueries.medium}) {
    margin: ${spacing.small} 0;
    grid-template-rows: ${spacing.small} auto;
    grid-template-columns: 100%;
    grid-template-areas:
      'type'
      'allContent';
  }
`;

export const StyledSlotGrid = styled.div`
  display: grid;
  grid-area: allContent;
  padding: ${spacing.normal};
  grid-row-gap: ${spacing.small};
  grid-column-gap: ${spacing.normal};
  ${p =>
    p.type ? gridTemplates[p.type].desktop : gridTemplates.common.desktop};
  & b {
    font-weight: 900;
  }

  @media (${mediaQueries.medium}) {
    ${p =>
      p.type ? gridTemplates[p.type].mobile : gridTemplates.common.mobile};
  }
`;

export const StyledType = styled.div`
  grid-area: type;
  background-color: ${p => (p.type ? typeColors[p.type] : typeColors.common)};
  border: 1px solid ${p => (p.type ? typeColors[p.type] : typeColors.common)};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  @media (${mediaQueries.medium}) {
    border-bottom-left-radius: 0;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
`;

export const StyledTime = styled.div`
  grid-area: time;
`;

export const StyledTitle = styled.div`
  grid-area: title;
`;

export const StyledFavorite = styled.div`
  grid-area: favorite;
  justify-self: right;
`;

export const StyledDuration = styled.div`
  grid-area: duration;
`;

export const StyledRoom = styled.div`
  grid-area: room;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 30px 190px auto;
  grid-template-areas: 'roomIcon roomLabel roomName';
  @media (${mediaQueries.medium}) {
    grid-template-rows: 30px auto;
    grid-template-columns: 30px auto;
    grid-template-areas:
      'roomIcon roomLabel'
      'roomIcon roomName';
  }
`;

export const StyledRoomLabel = styled.div`
  grid-area: roomLabel;
  display: flex;
  & > svg {
    padding-right: ${spacing.small};
    color: ${colors.grey};
  }
`;

export const StyledRoomIcon = styled.div`
  grid-area: roomIcon;
`;
export const StyledRoomName = styled.b`
  grid-area: roomName;
`;

export const StyledDescription = styled.div`
  grid-area: description;
  display: flex;
`;

export const StyledSpeakers = styled.div`
  grid-area: speakers;
  display: grid;
  grid-auto-rows: min-content;
  grid-template-rows: auto;
  grid-template-columns: 30px 190px auto;
  grid-template-areas: 'speakerIcon speakerLabel speakerName';
  @media (${mediaQueries.medium}) {
    grid-template-rows: 30px auto;
    grid-template-columns: 30px auto;
    grid-template-areas:
      'speakerIcon speakerLabel'
      'speakerIcon speakerName';
  }
`;

export const StyledUserIcon = styled.div`
  grid-area: speakerIcon;
`;

export const StyledUserLabel = styled.div`
  grid-area: speakerLabel;
  display: flex;
  & > svg {
    padding-right: ${spacing.small};
    color: ${colors.grey};
  }
`;

export const StyledUserName = styled.b`
  grid-area: speakerName;
  & button {
    text-align: left;
  }
`;
