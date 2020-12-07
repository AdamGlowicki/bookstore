import {
  SWITCH_PROGRESS,
  SWITCH_ALERT
} from './type';

const initState = {}

const alertReducer = (state = initState, {type, payload}) => {
  switch (type) {
    case SWITCH_ALERT:
      return {...state, alert: payload}
    case SWITCH_PROGRESS:
      return {...state, progress: payload}
    default:
      return {...state}
  }
}

export default alertReducer
