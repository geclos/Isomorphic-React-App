const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

export function login() {
  const payload = {
    type: LOGIN,
    date: Date.now()
  };

  let at = localStorage.getItem('access_token');
  if (!at) {
    at = makeID();
    localStorage.setItem('access_token', at);
  }

  return Object.assign(payload, {accessToken: at})
}

export function logOut() {
  localStorage.removeItem('access_token')

  return {
    type: LOGOUT,
    date: Date.now()
  }
}

function makeID() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
