import http from '../utils/request'
export const musicLogin = params => {
    return http("get", "/login/cellphone", params);
};