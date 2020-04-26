import request from 'umi-request';
import { UserRegisterParams } from './index';
import { baseURL } from '@/utils/config';

export async function fakeRegister(params: UserRegisterParams) {
  return request(baseURL + '/user/register', {
    method: 'POST',
    data: params,
  });
}
