import request from '@/utils/request';
import { baseURL } from '@/utils/config';

export interface LoginParamsType {
  username: string;
  password: string;
}

export async function fakeAccountLogin(params: LoginParamsType) {
  return request(baseURL + '/user/login', {
    method: 'POST',
    data: params,
  });
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
