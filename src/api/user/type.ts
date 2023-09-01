//定义用户相关的数据类型

export interface ILoginFormData {
  username: string;
  password: string;
}

export interface IResponseData {
  code: number;
  message: string;
  ok: boolean;
}

export interface ILoginData {
  token: string;
}

export interface ILoginResponseData extends IResponseData {
  data: ILoginData;
}

export interface IUserInfo {
  userId: string;
  avatar: string;
  username: string;
  password: string;
  desc: string;
  roles: string[];
  buttons: string[];
  routes: string[];
  token: string;
}

export interface IUserInfoData {
  checkUser: IUserInfo;
}

export interface IUserInfoResponseData extends IResponseData {
  data: IUserInfoData;
}
