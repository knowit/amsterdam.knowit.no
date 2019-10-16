import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Home from '@material-ui/icons/Home';
import Person from '@material-ui/icons/Person';
import AddFavorite from '../Favorites/AddFavorite';
import {
  StyledSlotGridWrapper,
  StyledSlotGrid,
  StyledTitle,
  StyledType,
  StyledDescription,
  StyledSpeakers,
  StyledFavorite,
  StyledRoom,
  StyledDuration,
  StyledTime,
  StyledUserName,
  StyledUserLabel,
  StyledRoomLabel,
  StyledRoomName,
  StyledRoomIcon,
  StyledUserIcon,
} from './SlotStyles';
import SlotSpeakers from './SlotSpeakers';

const Slot = ({ slot, date, favorites, setFavorites, viewType }) => {
  return (
    <StyledSlotGridWrapper viewType={viewType}>
      <StyledType type={slot.type} viewType={viewType} />
      <StyledSlotGrid
        type={slot.type}
        viewType={viewType}
        rowGap={!slot.description && !slot.room && '0'}>
        <StyledTitle>
          <b>{slot.title}</b>
        </StyledTitle>
        <StyledTime>
          <b>{`${slot.start} ${slot.end ? '-' : ''} ${slot.end || ''}`}</b>
        </StyledTime>
        {slot.duration && (
          <StyledDuration>
            {slot.duration ? `${slot.duration} minutter` : 'Ikke oppgitt'}
          </StyledDuration>
        )}
        {slot.description && (
          <StyledDescription>
            <div
              css={css`
                display: inline-block;
              `}
              dangerouslySetInnerHTML={{
                __html: slot.description,
              }}
            />
          </StyledDescription>
        )}
        <StyledFavorite>
          <AddFavorite
            title={slot.title}
            startTime={slot.start || slot.time}
            setFavorites={setFavorites}
            favorites={favorites}
            date={slot.date}
          />
        </StyledFavorite>
        {slot.userIds && (
          <StyledSpeakers viewType={viewType}>
            <StyledUserIcon>
              <Person fontSize="small" />
            </StyledUserIcon>
            <StyledUserLabel>Foredragsholdere</StyledUserLabel>
            <StyledUserName>
              <SlotSpeakers slot={slot} />
            </StyledUserName>
          </StyledSpeakers>
        )}
        {slot.room && (
          <StyledRoom viewType={viewType}>
            <StyledRoomIcon>
              <Home fontSize="small" />
            </StyledRoomIcon>
            <StyledRoomLabel>Rom:</StyledRoomLabel>
            <StyledRoomName>{slot.room}</StyledRoomName>
          </StyledRoom>
        )}
      </StyledSlotGrid>
    </StyledSlotGridWrapper>
  );
};

Slot.propTypes = {
  slot: PropTypes.object,
  viewType: PropTypes.string,
};

export default Slot;
