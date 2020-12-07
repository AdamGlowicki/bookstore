import {
  SWITCH_PROGRESS,
  SWITCH_ALERT
} from './type';

export const switchAlert = payload => ({
  type: SWITCH_ALERT,
  payload
})

export const switchProgress = payload => ({
  type: SWITCH_PROGRESS,
  payload,
})
