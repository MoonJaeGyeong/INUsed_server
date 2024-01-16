import client from './client';

//로그인
export const login = ({ userid, userpw }) =>
  client.post('/api/auth/login', { userid, userpw });

//회원가입
export const register = ({ nickname, userid, userpw }) =>
  client.post('/api/auth/register', { nickname, userid, userpw });

//로그인 상태 확인
export const check = () => client.get('/api/auth/check');
