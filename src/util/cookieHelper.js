export const setCookie = (name, value, removeCookie) => {
  let expires;
  if (removeCookie) {
    expires = 'Thu, 01 Jan 1970 00:00:01 GMT';
  } else {
    const d = new Date();
    d.setTime(d.getTime() + 9999 * 24 * 60 * 60 * 1000);
    expires = `expires=${d.toUTCString()}`;
  }
  document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/`;
};

export const getCookie = (name, cookies) => {
  const value = `; ${decodeURIComponent(cookies)}`;
  const cookieParts = value.split(`; ${name}=`);
  if (cookieParts.length > 1) {
    return cookieParts
      .pop()
      .split(';')
      .shift();
  }
  return null;
};

export const isValidCookie = (name, cookies) =>
  getCookie(name, cookies) !== null;

export const deleteCookie = name => {
  setCookie(name, '', true);
};
