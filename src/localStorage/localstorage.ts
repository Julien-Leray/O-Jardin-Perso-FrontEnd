export function addTokenAndPseudoToLocalStorage(
  token: string,
  firstname: string
) {
  localStorage.setItem('token', token);
  localStorage.setItem('firstname', firstname);
}

export function getTokenAndPseudoFromLocalStorage() {
  const jwt = localStorage.getItem('jwt');
  const firstname = localStorage.getItem('firstname');

  return { jwt, firstname };
}
