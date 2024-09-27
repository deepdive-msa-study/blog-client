export const getSessionItem = (key) => {
  const stored = sessionStorage.getItem(key);

  if (!stored) {
    return null;
  }

  return {
    token: stored,
    payload: parseJwtPayload(stored),
  };
};

export const parseJwtPayload = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const decodedPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );

    return JSON.parse(decodedPayload);
  } catch (e) {
    return console.log(e);
  }
};
