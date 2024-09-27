import axios from 'axios';
import dayjs from 'dayjs';

import { API_BASE_URL } from './environment';
import { parseJwtPayload } from './utils';

// 토큰의 만료 여부를 확인합니다.
const checkTokenExpiration = (token) => {
  const payload = parseJwtPayload(token);
  const expirationTime = dayjs.unix(payload.exp);
  const currentTime = dayjs();
  const diffMinutes = expirationTime.diff(currentTime, 'minute');

  return diffMinutes > 0; // 유효하면 true, 만료하면 false
};

// 리프레쉬 토큰으로 새로운 토큰을 발급 받습니다.
const requestToken = async (refreshToken) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/new`, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    if (res.data.success) {
      const { token } = res.data.data;
      sessionStorage.setItem('session', token);

      return token;
    }

    return null;
  } catch (e) {
    return e;
  }
};

const server = axios.create({
  baseURL: API_BASE_URL,
});

server.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error.response;
  }
);

server.interceptors.request.use(async (config) => {
  try {
    const token = sessionStorage.getItem('session');

    // 유효할 경우
    if (token && checkTokenExpiration(token)) {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    }

    // 만료되었을 경우 리프레쉬 토큰을 찾아 새로운 토큰을 발급 받습니다.
    const refreshTokens = [sessionStorage.getItem('i'), localStorage.getItem('i')];

    // 세션스토리지 -> 로컬스토리지 순서로 리프레쉬 토큰을 찾습니다.
    for (const rt of refreshTokens) {
      if (rt && checkTokenExpiration(rt)) {
        const newToken = await requestToken(rt); // 새로운 토큰을 요청합니다.

        if (newToken) {
          config.headers.Authorization = `Bearer ${newToken}`;
          return config;
        }
      }
    }

    // 모든 토큰이 만료된 경우
    if (token && !checkTokenExpiration(token)) {
      sessionStorage.removeItem('session');
      sessionStorage.removeItem('i');
      localStorage.removeItem('i');
      window.location.href = '/';
    }

    return config;
  } catch (e) {
    return e;
  }
});

export default server;
