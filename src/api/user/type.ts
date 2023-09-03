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
  token?: string;
  message?: string;
}

export interface ILoginResponseData extends IResponseData {
  data: ILoginData;
}

export interface IUserInfoData {
  name: string;
  avatar: string;
  roles: string[];
  buttons: string[];
  routes: string[];
}

export interface IUserInfoResponseData extends IResponseData {
  data: IUserInfoData;
}
