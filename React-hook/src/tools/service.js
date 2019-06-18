import axios from './../api/axios';
import message from './message';

export default function apiRequest(type, url, data) {
    return axios[type](url, type === 'get' ?  {params: data} : data).then((res) => {
        if (res.is_succ) {
            return res.data
        } else {
            if (url !== '/user') {
                message('error', res.message || '系统错误')
            }
            return false
        }
    }).catch((err) => {
        message('error', err && err.message)
        return Promise.reject(err)
    })
}