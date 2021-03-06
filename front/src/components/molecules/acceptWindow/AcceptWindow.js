import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import DraggableModal from '../draggableModal/DraggableModal';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {mediaQueries} from '../../../enum';

const StyledWrapper = styled.div.attrs({
  className: 'p-3'
})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 120px;
  ${({mobile}) => (
  mobile && css`
      width: 80vw;
    `
)}
`

const StyledContent = styled.div`
  font: 16px Arial, sans-serif;
  font-weight: 600;
`

const StyledButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const AcceptWindow = ({open, setOpen, callback, message}) => {
  const mobile = useMediaQuery(mediaQueries.mobile)

  const handleAccept = () => {
    callback()
    setOpen(false)
  }

  return (
    <DraggableModal open={open} setOpen={setOpen}>
      <StyledWrapper mobile={mobile}>
        <StyledContent>
          <div>
            {message}
          </div>
        </StyledContent>
        <StyledButtons>
          <Button color='secondary' size='small' onClick={handleAccept}>Akceptuj</Button>
          <Button color='primary' size='small' onClick={() => setOpen(false)}>Odrzuć</Button>
        </StyledButtons>
      </StyledWrapper>
    </DraggableModal>
  );
};

AcceptWindow.propTypes = {
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired
};

export default AcceptWindow;
