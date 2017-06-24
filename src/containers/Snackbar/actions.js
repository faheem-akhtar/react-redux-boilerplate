import uuidv4 from 'uuid/v4'

import { SNACKBAR_SET, SNACKBAR_DISMISS } from '@/store/action-types'

export const setMessage = (msg, time) => ({
  type: SNACKBAR_SET,
  id: uuidv4(),
  msg,
  time: time || 5000
})

export const removeMessage = id => ({
  type: SNACKBAR_DISMISS,
  id
})
