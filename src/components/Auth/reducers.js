import { SIGN_IN, SIGN_OUT } from '@/store/action-types'

const initialState = {
  user: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        user: action.payload
      }
    case SIGN_OUT:
      return {
        user: {}
      }
  }
  return state
}
