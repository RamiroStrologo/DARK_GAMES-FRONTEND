function checkJwtExist() {
  const jwt = localStorage.getItem('jwt');
  return jwt ? jwt : false;
}

async function authJwt(jwt) {
  const url = getBackendUrl();
  const response = await fetch(`${url}/api/auth/token`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
      'Content-Type': 'application/json',
    },
  });
  return response.ok ? true : false;
}

function saveJwt(jwt) {
  const ok = localStorage.setItem('jwt', jwt.token);
  return ok;
}
