import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import spacing from '../util/spacing';
import { useSpring, animated } from 'react-spring';
import Button from './Button';
import mediaQueries from '../util/mediaQueries';
import colors from '../util/colors';

const StyledCodeOfConduct = styled.div`
  margin-top: ${spacing.large};
`;

const StyledCodeOfConductText = styled.div`
  display: block;
  margin: ${spacing.small} auto;

  @media (${mediaQueries.medium}) {
    max-width: 90%;
  }
`;

const CodeOfConduct = () => {
  const listRef = React.createRef();
  const [showCodeOfConduct, toggleCodeOfConduct] = useState(false);
  const [listHeight, setListHeight] = useState(false);
  const props = useSpring({
    opacity: showCodeOfConduct ? 1 : 0,
    height: showCodeOfConduct ? listHeight : 0,
    from: { opacity: 0, height: 0 },
  });
  useEffect(() => {
    const getBoundingClientRectData = listRef.current.getBoundingClientRect();
    setListHeight(getBoundingClientRectData.height + spacing.spacingUnit);
  }, []);
  return (
    <StyledCodeOfConduct>
      <Button
        css={css`
          display: inherit;
          margin: 0 auto;
          &,
          &:focus,
          &:hover {
            ${showCodeOfConduct && `background-color: ${colors.blueDark}`};
            ${showCodeOfConduct && `border-color: ${colors.blueDark}`};
          }
        `}
        onClick={() => toggleCodeOfConduct(!showCodeOfConduct)}>
        Code of Conduct
      </Button>
      <animated.div style={props}>
        <StyledCodeOfConductText hidden={!showCodeOfConduct}>
          <ul ref={listRef}>
            <li>Ha det gøy og hjelp andre med å ha det gøy også! </li>
            <li>Si hei til noen du ikke kjenner. </li>
            <li>
              Møt interessante mennesker. Ikke virk overrasket hvis folk ikke
              passer inn i en stereotype.
            </li>
            <li>Start samtaler om teknologi, været, maten eller noe annet. </li>
            <li>Le og lær. </li>
            <li>Alle er her for å ha det gøy og lære noe nytt! </li>
            <li>
              Vi forventer at du respekterer andre deltakere, uavhengig av
              kjønn, etnisitet, religion, alder, legning, funksjonsevne eller
              andre aspekter knyttet til hvordan vi ser ut, kommer fra eller
              hvem vi er.
            </li>
            <li>La oss få vite hvis noe kommer i veien for noe av dette.</li>
          </ul>
        </StyledCodeOfConductText>
      </animated.div>
    </StyledCodeOfConduct>
  );
};

export default CodeOfConduct;
