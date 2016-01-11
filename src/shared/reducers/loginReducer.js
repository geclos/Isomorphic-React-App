import immutable from 'immutable'

const defaultState = immutable.Map({
  accessToken: '',
  isLoggedIn: false
});

export default function loginReducer (state = defaultState, action) {
  switch (action.type) {
    case "LOGIN":
      if (action.accessToken) {
        return state
        .set('accessToken', action.accessToken)
        .set('isLoggedIn', true);
      } else {
        return state;
      }
      break;
    case "LOGOUT":
      return defaultState;
      break;
    default:
      return state;
  }
}
