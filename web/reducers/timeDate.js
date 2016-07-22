import { dispatch } from '../utils/utils'

const reducer = (state = null, action) => {

  switch(action.type) {
  case 'NAV_SELECT':
    if (action.select === 'TIMEDATE') {
      if (state) return state
      state = setInterval(() => dispatch({
        type: 'SERVEROP_REQUEST',
        data: {
          operation: 'timeDateUpdate',
          mute: true
        }
      }), 1000)
    }
    else {
      if (state) {
        clearInterval(state)
        return null
      }
    }
    return state

  default:
    return state
  }
}

export default reducer
