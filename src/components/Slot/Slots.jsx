import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import groupBy from 'lodash/groupBy';
import Slot from '.';
import { getCookie, setCookie } from '../../util/cookieHelper';
import viewmodel from '../../json';

const Slots = ({ slots, removeFavorite, noGroupBy, isFavourites }) => {
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
    return slots.map(slot => (
      <Slot
        key={`${slot.title}_${slot.room}`}
        slot={slot}
        setFavorites={updateFavorites}
        favorites={favorites}
      />
    ));
  }

  if (isFavourites) {
    const groupedByDate = groupBy(slots, slot => slot.date);
    return Object.keys(groupedByDate)
      .sort()
      .map(startKey => (
        <div key={startKey}>
          <h3>{viewmodel.days.find(day => day.date === startKey).label}</h3>
          {groupedByDate[startKey]
            .sort((a, b) => (a.start > b.start ? 1 : -1))
            .map(slot => (
              <Slot
                key={`${slot.title}_${slot.room}`}
                slot={slot}
                setFavorites={updateFavorites}
                favorites={favorites}
              />
            ))}
        </div>
      ));
  }

  const groupedByStart = groupBy(slots, slot => slot.start);
  return Object.keys(groupedByStart)
    .sort()
    .map(startKey => (
      <div key={startKey}>
        <h3>{startKey}</h3>
        {groupedByStart[startKey].map(slot => (
          <Slot
            key={`${slot.title}_${slot.room}`}
            slot={slot}
            setFavorites={updateFavorites}
            favorites={favorites}
          />
        ))}
      </div>
    ));
};

Slots.propTypes = {
  slots: PropTypes.arrayOf(PropTypes.object),
  removeFavorite: PropTypes.func,
  noGroupBy: PropTypes.bool,
  isFavourites: PropTypes.bool,
};

Slots.defaultProps = {
  noGroupBy: false,
};

export default Slots;
