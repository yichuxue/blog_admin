import request from '@/utils/request';
import { baseURL } from '@/utils/config';

export async function query(): Promise<any> {
  return request('/api/users');
}

export async function queryCurrent(): Promise<any> {
  return request(baseURL + '/user/info');
}

export async function queryNotices(): Promise<any> {
  return request('/api/notices');
}
