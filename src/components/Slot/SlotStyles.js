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
      grid-template-columns: 10% 78% 10%;
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
      grid-template-columns: 10% 78% 10%;
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
      grid-template-rows: auto;
      grid-template-columns: 10% 78% 10%;
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
  keynote: {
    desktop: css`
      grid-template-rows: auto auto auto;
      grid-template-columns: 10% 78% 10%;
      align-items: center;
      grid-template-areas:
        'time title favorite'
        'time    title       favorite'
        '.       description description'
        '.       room        room';
    `,
    mobile: css`
      grid-template-rows: auto auto auto auto auto;
      grid-template-columns: 70% 30%;
      grid-template-areas:
        'time        favorite'
        '.           favorite'
        'title       title'
        'description description'
        'room        room';
    `,
  },
};

const responsiveStyles = {
  type: {
    desktop: css`
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    `,
    mobile: css`
      border-bottom-left-radius: 0;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
    `,
  },
  room: {
    desktop: css`
      grid-template-rows: auto;
      grid-template-columns: 30px 190px auto;
      grid-template-areas: 'roomIcon roomLabel roomName';
    `,
    mobile: css`
      grid-template-rows: 30px auto;
      grid-template-columns: 30px auto;
      grid-template-areas:
        'roomIcon roomLabel'
        'roomIcon roomName';
    `,
  },
  speakers: {
    desktop: css`
      grid-template-rows: auto;
      grid-template-columns: 30px 190px auto;
      grid-template-areas: 'speakerIcon speakerLabel speakerName';
    `,
    mobile: css`
      grid-template-rows: 30px auto;
      grid-template-columns: 30px auto;
      grid-template-areas:
        'speakerIcon speakerLabel'
        'speakerIcon speakerName';
    `,
  },
};

const getViewTypeForDesktop = viewType =>
  viewType === 'row' ? 'desktop' : 'mobile';

const getStyledSlotGridWrapperStyle = (viewType, isMobile = false) => {
  if (viewType === 'column' || isMobile) {
    return css`
      margin: ${spacing.small} 0;
      margin-right: ${viewType === 'column' && !isMobile && spacing.normal};
      grid-template-rows: ${spacing.small} auto;
      grid-template-columns: 100%;
      grid-template-areas:
        'type'
        'allContent';
    `;
  }
  return css`
    margin-top: ${spacing.large};
    grid-template-rows: auto;
    grid-template-columns: ${spacing.small} auto;
    grid-template-areas: 'type allContent';

    &:last-child {
      margin-bottom: ${spacing.large};
    }
  `;
};
export const StyledSlotGridWrapper = styled.div`
  display: grid;
  background-color: white;
  border-radius: 5px;
  ${p => getStyledSlotGridWrapperStyle(p.viewType, false)};

  @media (${mediaQueries.medium}) {
    ${p => getStyledSlotGridWrapperStyle(p.viewType, true)};
  }
`;

const getSlotGridStyle = (type, viewType, isMobile = false) => {
  const desktopOrMobile =
    viewType === 'column' || isMobile ? 'mobile' : 'desktop';
  if (type) {
    return gridTemplates[type][desktopOrMobile];
  }
  return gridTemplates.other[desktopOrMobile];
};

export const StyledSlotGrid = styled.div`
  display: grid;
  grid-area: allContent;
  padding: ${spacing.normal};
  grid-row-gap: ${p => p.rowGap || spacing.small};
  grid-column-gap: ${spacing.normal};
  ${p => getSlotGridStyle(p.type, p.viewType, false)};
  & b {
    font-weight: 900;
  }

  @media (${mediaQueries.medium}) {
    ${p => getSlotGridStyle(p.type, p.viewType, true)};
  }
`;

export const StyledType = styled.div`
  grid-area: type;
  background-color: ${p => (p.type ? typeColors[p.type] : typeColors.other)};
  border: 1px solid ${p => (p.type ? typeColors[p.type] : typeColors.other)};
  ${p => responsiveStyles.type[getViewTypeForDesktop(p.viewType)]}
  
  @media (${mediaQueries.medium}) {
    ${responsiveStyles.type.mobile}

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
  ${p => responsiveStyles.room[getViewTypeForDesktop(p.viewType)]}

  @media (${mediaQueries.medium}) {
    ${responsiveStyles.room.mobile}
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
  ${p => responsiveStyles.speakers[getViewTypeForDesktop(p.viewType)]}

  @media (${mediaQueries.medium}) {
    ${responsiveStyles.speakers.mobile}
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
