import React from 'react';
import Speaker, { SpeakerModal } from '../Speaker';

const SlotSpeakers = ({ slot }) => (
  <SpeakerModal buttonText={slot.userIds}>
    <Speaker slot={slot} />
  </SpeakerModal>
);

export default SlotSpeakers;
