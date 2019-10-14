import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Home from '@material-ui/icons/Home';
import Person from '@material-ui/icons/Person';
import AddFavorite from '../Favorites/AddFavorite';
import spacing from '../../util/spacing';
import Button from '../Button';
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

const maxLengthStyle = maxLength => css`
  max-width: ${maxLength}px;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  display: inline-block;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: calc(${maxLength}px - 60px);
    height: 100%;
    width: 60px;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 1) 100%
    );
  }
`;

const expandMoreStyle = rotation => css`
  transform: rotate(${rotation}deg);
  transition: transform 1s ease-in-out;
`;

const ShowButton = ({ showDescription, setShowDescription }) => (
  <Button
    appearance="stripped"
    onClick={() => setShowDescription(!showDescription)}>
    <ExpandMore
      css={showDescription ? expandMoreStyle(180) : expandMoreStyle(0)}
    />
  </Button>
);

ShowButton.propTypes = {
  showDescription: PropTypes.bool.isRequired,
  setShowDescription: PropTypes.func.isRequired,
};

const Slot = ({ slot, date, favorites, setFavorites, viewType }) => {
  const descriptionRef = React.createRef();

  const [maxLength, setMaxLength] = useState(undefined);
  const [showDescription, setShowDescription] = useState(false);

  /*useEffect(() => {
    setTimeout(() => {
      if (descriptionRef && descriptionRef.current) {
        const getBoundingClientRectData = descriptionRef.current.getBoundingClientRect();
        if (getBoundingClientRectData.height > 30) {
          setMaxLength(
            getBoundingClientRectData.width - spacing.spacingUnit * 3,
          );
        }
      }
    }, 600);
  }, [viewType]);*/

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
          <StyledDescription ref={descriptionRef}>
            <div
              css={
                maxLength && !showDescription
                  ? maxLengthStyle(maxLength)
                  : css`
                      display: inline-block;
                    `
              }>
              {slot.description}
              {maxLength && showDescription && (
                <ShowButton
                  showDescription={showDescription}
                  setShowDescription={setShowDescription}
                />
              )}
            </div>
            {maxLength && !showDescription && (
              <ShowButton
                showDescription={showDescription}
                setShowDescription={setShowDescription}
              />
            )}
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
