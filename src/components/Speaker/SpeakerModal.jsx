import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '../Button';
import css from '@emotion/css';
import colors from '../../util/colors';
import spacing from '../../util/spacing';
import styled from '@emotion/styled';
import mediaQueries from '../../util/mediaQueries';
import Close from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    margin: '0 auto',
    overflowY: 'scroll',
  },
}));

const StyledModal = styled.div`
  max-width: 60%;
  width: 60%;
  overflow-y: scroll;
  background-color: white;
  padding: ${spacing.normal};
  max-height: 90vh;
  @media (${mediaQueries.medium}) {
    max-width: 100%;
    width: 100%;
    max-height: 100vh;
  }
`;

const SpeakerModal = ({ children, buttonText }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        css={css`
          color: ${colors.blue};
          text-decoration: underline;

          &:hover,
          &:focus {
            color: ${colors.blueDark};
          }
        `}
        appearance="stripped"
        onClick={handleOpen}>
        {buttonText}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <StyledModal>
            <Button
              css={css`
                float: right;
              `}
              onClick={handleClose}
              appearance="stripped">
              <Close />
            </Button>
            {children}
          </StyledModal>
        </Fade>
      </Modal>
    </div>
  );
};

export default SpeakerModal;
