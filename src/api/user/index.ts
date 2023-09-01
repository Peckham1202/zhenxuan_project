import request from '@/utils/request';
import {
  ILoginFormData,
  ILoginResponseData,
  IUserInfoResponseData,
} from './type';

enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

//暴露请求函数
export const reqLogin = (data: ILoginFormData) => {
  return request.post<any, ILoginResponseData>(API.LOGIN_URL, data);
};

export const reqUserInfo = () => {
  return request.get<any, IUserInfoResponseData>(API.USERINFO_URL);
};
