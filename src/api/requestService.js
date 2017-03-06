/**
 * Created by enjoyzhou on 17-2-16.
 * https://github.com/mzabriskie/axios#request-config
 */

import Axios from 'axios'
import Conf from './conf'

const Http = (path, method, domain) => {
  return (data, params) => {
    return Axios({
      method: method,
      url: (domain || Conf.domain) + '' + path,
      data: method === 'post' ? data : null,
      params: method === 'get' ? data : params
    })
      .then(function (response) {
        // console.log(response);
        return response.data
      })
      .catch(function (error) {
        console.log(error);
        return error
      });
  }
}

export function httpGet(path, domain) {
  return Http(path, 'get', domain)
}

export function httpPost(path, domain) {
  return Http(path, 'post', domain)
}
