//封装本地存储的存储和读取数据的方法

export function setToken(token: string) {
  localStorage.setItem('TOKEN', token);
}

export function getToken() {
  return localStorage.getItem('TOKEN');
}

export function removeToken() {
  localStorage.removeItem('TOKEN');
}
