import immutable from 'immutable'

const defaultState = immutable.Map({
  accessToken: '',
  isLoggedIn: false
});

export default function loginReducer (state = defaultState, action) {
  switch (action.type) {
    case "LOGIN":
      return state
        .set('accessToken', action.accessToken)
        .set('isLoggedIn', true);
      break;
    case "LOGOUT":
      return state
        .set('accessToken', '')
        .set('isLoggedIn', false);
      break;
    default:
      return state;
  }
}
