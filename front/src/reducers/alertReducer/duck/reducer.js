import {SWITCH_SUCCESS_ALERT} from './type';

const initState = {}

const alertReducer = (state = initState, {type, payload}) => {
  switch (type) {
    case SWITCH_SUCCESS_ALERT:
      return {...state, alert: payload}
    default:
      return {...state}
  }
}

export default alertReducer
