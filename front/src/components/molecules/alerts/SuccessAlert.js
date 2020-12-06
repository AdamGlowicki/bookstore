import React, {useEffect, useState} from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import withStyles from "@material-ui/core/styles/withStyles";
import {useSelector} from 'react-redux';

const StyledSnackbar = withStyles({
  root: {
    animation: '$move 4500ms',
  },
  '@keyframes move': {
    '0%': {transform: 'translateY(-50px)', opacity: 0,},
    '10%': {transform: 'translateY(0)', opacity: 1},
    '90%': {transform: 'translateY(0)', opacity: 1},
    '100%': {transform: 'translateY(-50px)', opacity: 0},
  }
})(props => <Snackbar {...props}/>)

const SuccessAlert = ({}) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const alert = useSelector(state => state.alert.alert)

  useEffect(() => {
    if (alert) {
      setOpen(alert.success);
      setMessage(alert.message)
    }
  }, [alert])

  useEffect(() => {
    const handler = setTimeout(() => {
      setOpen(false);
    }, 4000)
    return () => {
      clearTimeout(handler)
    }
  }, [open])

  return (
    <StyledSnackbar
      anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      open={open}
      onClose={() => setOpen(false)}
    >
      <MuiAlert severity='success'>{message}</MuiAlert>
    </StyledSnackbar>
  );
};

export default SuccessAlert;
