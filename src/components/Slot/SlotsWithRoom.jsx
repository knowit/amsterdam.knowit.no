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
import styled from '@emotion/styled';
import groupBy from 'lodash/groupBy';
import mediaQueries from '../../util/mediaQueries';

const StyledSlotWithRooms = styled.div`
  flex: ${p => (p.viewType === 'column' ? '1 28%' : '1')};
  width: ${p => (p.viewType === 'column' ? 28 : 100)}%;

  @media (${mediaQueries.medium}) {
    flex: 1 100%;
    width: 100%;
  }
`;

const SlotsWithRoom = ({ slot, date, favorites, setFavorites, viewType }) => {
  const groupedByRoom = groupBy(slot.slots, subSlot => subSlot.room);
  const sortedRoomsByLength = Object.keys(groupedByRoom)
    .map(roomKey => {
      const sortedSlots = groupedByRoom[roomKey].sort((a, b) => {
        return (
          new Date('1970/01/01 ' + a.start) - new Date('1970/01/01 ' + b.start)
        );
      });
      return { roomKey, slots: sortedSlots };
    })
    .sort((a, b) => a.slots.length - b.slots.length);

  return (
    <>
      {sortedRoomsByLength.map(room => {
        return (
          <StyledSlotWithRooms viewType={viewType}>
            <h3>{room.roomKey}</h3>
            {room.slots.map(subSlot => (
              <StyledSlotGridWrapper viewType={viewType}>
                <StyledType type={subSlot.type} viewType={viewType} />
                <StyledSlotGrid
                  type={subSlot.type}
                  viewType={viewType}
                  rowGap={!subSlot.description && !subSlot.room && '0'}>
                  <StyledTitle>
                    <b>{subSlot.title}</b>
                  </StyledTitle>
                  <StyledTime>
                    <b>{`${subSlot.start} ${
                      subSlot.end ? '-' : ''
                    } ${subSlot.end || ''}`}</b>
                  </StyledTime>
                  {subSlot.duration && (
                    <StyledDuration>
                      {subSlot.duration
                        ? `${subSlot.duration} minutter`
                        : 'Ikke oppgitt'}
                    </StyledDuration>
                  )}
                  {subSlot.description && (
                    <StyledDescription>
                      <div
                        css={css`
                          display: inline-block;
                        `}
                        dangerouslySetInnerHTML={{
                          __html: subSlot.description,
                        }}
                      />
                    </StyledDescription>
                  )}
                  <StyledFavorite>
                    <AddFavorite
                      title={subSlot.title}
                      startTime={subSlot.start || subSlot.time}
                      setFavorites={setFavorites}
                      favorites={favorites}
                      date={subSlot.date}
                    />
                  </StyledFavorite>
                  {subSlot.userIds && (
                    <StyledSpeakers viewType={viewType}>
                      <StyledUserIcon>
                        <Person fontSize="small" />
                      </StyledUserIcon>
                      <StyledUserLabel>Foredragsholdere</StyledUserLabel>
                      <StyledUserName>
                        <SlotSpeakers slot={subSlot} />
                      </StyledUserName>
                    </StyledSpeakers>
                  )}
                  {subSlot.room && (
                    <StyledRoom viewType={viewType}>
                      <StyledRoomIcon>
                        <Home fontSize="small" />
                      </StyledRoomIcon>
                      <StyledRoomLabel>Rom:</StyledRoomLabel>
                      <StyledRoomName>{subSlot.room}</StyledRoomName>
                    </StyledRoom>
                  )}
                </StyledSlotGrid>
              </StyledSlotGridWrapper>
            ))}
          </StyledSlotWithRooms>
        );
      })}
    </>
  );
};

SlotsWithRoom.propTypes = {
  slot: PropTypes.object,
  viewType: PropTypes.string,
};

export default SlotsWithRoom;
