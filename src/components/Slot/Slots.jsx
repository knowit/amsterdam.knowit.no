import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import groupBy from 'lodash/groupBy';
import styled from '@emotion/styled';
import Slot from '.';
import { getCookie, setCookie } from '../../util/cookieHelper';
import viewmodel from '../../json';
import css from '@emotion/css';
import mediaQueries from '../../util/mediaQueries';
import SlotsWithRoom from './SlotsWithRoom';

const groupSlots = {
  1: [
    { start: '09:00', end: '09:15' },
    { start: '09:15', end: '09:30' },
    { start: '09:30', end: '10:00' },
    { start: '10:00', end: '10:30' },
    { start: '10:45', end: '11:15' },
    { start: '11:15', end: '12:00' },
    { start: '13:00', end: '14:00' },
    { start: '14:00', end: '15:00' },
  ],
};

const getColumnStyle = viewType => {
  if (viewType === 'column') {
    return css`
      align-items: baseline;
      flex-wrap: wrap;

      & > * {
        flex: 1 28%;
        width: 28%;
      }

      @media (${mediaQueries.medium}) {
        flex-direction: column;
        & > * {
          flex: 1 100%;
          width: 100%;
        }
      }
    `;
  }
  return '';
};

const StyledSlots = styled.div`
  display: flex;
  flex-direction: ${p => (p.viewType === 'row' ? 'column' : 'row')};
  ${p => getColumnStyle(p.viewType)};
`;

const Slots = ({
                 slots,
                 removeFavorite,
                 noGroupBy,
                 viewType,
                 isFavourites,
                 activeDay,
               }) => {
  const [favorites, setFavorites] = useState([]);

  const updateFavorites = newFavorites => {
    setCookie('favorites', JSON.stringify(newFavorites));
    setFavorites(newFavorites);
    removeFavorite && removeFavorite(newFavorites);
  };

  useEffect(() => {
    const favoritesCookies = getCookie('favorites', document.cookie);
    const currentCookie = favoritesCookies ? JSON.parse(favoritesCookies) : [];
    setFavorites(currentCookie);
  }, []);

  if (noGroupBy) {
    return (
      <StyledSlots viewType={viewType}>
        {slots.map(slot => (
          <Slot
            key={`${slot.title}_${slot.room}`}
            slot={slot}
            setFavorites={updateFavorites}
            favorites={favorites}
            viewType={viewType}
          />
        ))}
      </StyledSlots>
    );
  }

  if (isFavourites) {
    const groupedByDate = groupBy(slots, slot => slot.date);
    return Object.keys(groupedByDate)
      .sort()
      .map(startKey => (
        <div key={startKey}>
          <h3>{viewmodel.days.find(day => day.date === startKey).label}</h3>
          <StyledSlots viewType={viewType}>
            {groupedByDate[startKey]
              .sort((a, b) => (a.start > b.start ? 1 : -1))
              .map(slot => (
                <Slot
                  key={`${slot.title}_${slot.room}`}
                  slot={slot}
                  setFavorites={updateFavorites}
                  favorites={favorites}
                  viewType={viewType}
                />
              ))}
          </StyledSlots>
        </div>
      ));
  }

  //const groupedByStart = groupBy(slots, slot => slot.start);

  const newTestSlots = () => {
    const groups = groupSlots[activeDay.date];
    if (!groups) {
      return slots;
    }
    let newSlots = [];
    slots.forEach(slot => {
      const foundGroupStart = groups.find(group => group.start === slot.start);
      const foundGroupEnd = groups.find(group => group.end === slot.end);
      if (slot.type !== 'other' && (foundGroupStart || foundGroupEnd)) {
        const start = foundGroupStart
          ? foundGroupStart.start
          : foundGroupEnd.start;
        const end = foundGroupEnd ? foundGroupEnd.end : foundGroupStart.end;
        const alreadyPushed = newSlots.find(newSlot => newSlot.start === start);
        const alreadyPushedIndex = newSlots.findIndex(
          newSlot => newSlot.start === start,
        );
        if (alreadyPushed) {
          newSlots = [
            ...newSlots.slice(0, alreadyPushedIndex),
            {
              ...newSlots[alreadyPushedIndex],
              slots: [...newSlots[alreadyPushedIndex].slots, slot],
            },
            ...newSlots.slice(alreadyPushedIndex + 1),
          ];
        } else {
          newSlots.push({
            start,
            end,
            date: slot.date,
            slots: [slot],
          });
        }
      } else {
        newSlots.push(slot);
      }
    });
    return newSlots;
  };

  const groupedByStart = groupBy(newTestSlots(), slot => slot.start);
  return Object.keys(groupedByStart)
    .sort()
    .map(startKey => (
      <div key={startKey}>
        <h2>{startKey}</h2>
        <StyledSlots viewType={viewType}>
          {groupedByStart[startKey].map((slot, index) =>
            slot.slots ? (
              <SlotsWithRoom
                key={`${index}`}
                slot={slot}
                setFavorites={updateFavorites}
                favorites={favorites}
                viewType={viewType}
              />
            ) : (
              <Slot
                key={`${slot.title}_${slot.room}`}
                slot={slot}
                setFavorites={updateFavorites}
                favorites={favorites}
                viewType={viewType}
              />
            ),
          )}
        </StyledSlots>
      </div>
    ));
};

Slots.propTypes = {
  slots: PropTypes.arrayOf(PropTypes.object),
  removeFavorite: PropTypes.func,
  noGroupBy: PropTypes.bool,
  isFavourites: PropTypes.bool,
  viewType: PropTypes.string,
};

Slots.defaultProps = {
  noGroupBy: false,
  viewType: 'row',
};

export default Slots;
