import Immutable from 'immutable'

const defaultState = Immutable.Map({
  accessToken: '',
  isLoggedIn: false
});

const auth = (state = defaultState, action) => {
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

export default auth
