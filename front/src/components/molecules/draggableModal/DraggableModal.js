import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled, {keyframes} from 'styled-components'
import Draggable from 'react-draggable';
import {Resizable} from "re-resizable";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const slide = keyframes`
  from {transform: scaleX(0); opacity: 0;}
  to {transform: scaleX(1); opacity: 1;}
`

const slideOut = keyframes`
  0% {transform: scaleX(1); opacity: 1}
  100% {transform:  scaleX(0); opacity: 0}
`

const StyledContent = styled.div.attrs({
  className: 'p-3'
})`
  background-color: #fff;
  animation: ${props => props.animation ? slide : slideOut} 1s;
  transform-origin: 0 0;
  border-radius: 8px;
  box-shadow: 3px 3px 26px -10px rgba(0,0,0,0.75);
`

const StyledAside = styled.aside`
  flex-grow: 1;
  cursor: move;
  text-align: center;
`

const StyledScrollContent = styled.div`
  overflow: scroll;
  &::-webkit-scrollbar{
  height: 5px;
  width: 5px;
  }
  &::-webkit-scrollbar-track {
  background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
  background: #ac0;
  }
`

const StyledModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  outline: none;
`

const DraggableModal = ({open: propsOpen, setOpen: prosSetOpen, children}) => {

  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (propsOpen) setOpen(true)
  }, [propsOpen])


  const onAnimationEnd =  (e) => {
    if (!propsOpen) setOpen(false)
  }

  const handleClose = () => {
    prosSetOpen(false)
  }
  return (
    <Fragment>
      {open && (
        <StyledModalContent>
          <Draggable handle='aside'>
            <Resizable>
              <StyledContent
                onAnimationEnd={onAnimationEnd}
                animation={propsOpen}
              >
                <div className='d-flex flex-row'>
                  <StyledAside/>
                  <IconButton onClick={handleClose} variant="contained" color="secondary">
                    <CloseIcon/>
                  </IconButton>
                </div>
                <StyledScrollContent>
                  {children}
                </StyledScrollContent>
              </StyledContent>
            </Resizable>
          </Draggable>
        </StyledModalContent>
      )}
    </Fragment>
  );
};

DraggableModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
}

export default DraggableModal;
