export function logIn(userData) {
  // @TODO some api login actions should go here

  return {
    type: "LOGIN",
    userData,
    date: Date.now()
  }
}

export function logOut() {
  return {
    type: "LOGOUT",
    date: Date.now()
  }
}
