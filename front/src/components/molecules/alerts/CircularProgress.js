import React, {useEffect, useState} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import Modal from '@material-ui/core/Modal';
import {connect} from 'react-redux';

const styledCircle = makeStyles({
  root: {
    color: 'rgb(155, 192, 0)',
    position: 'fixed',
    top: '50%',
    left: '50%',
  }
});

const MyCircularProgress = ({progress = false}) => {
  const [stateIsLoading, setStateIsLoading] = useState(false);
  const circle = styledCircle();


  useEffect(() => {
    setStateIsLoading(progress)
  }, [progress])
  return (
    <Modal
      open={stateIsLoading}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      BackdropProps={{
        style: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      }}
    >
      <CircularProgress style={{outline: 'none'}} size={30} className={circle.root}/>
    </Modal>
  );
};

const mapStateToProps = ({alert: {progress}}) => ({
  progress,
});

MyCircularProgress.propTypes = {
  progress: PropTypes.bool,
};

export default connect(mapStateToProps)(MyCircularProgress);
