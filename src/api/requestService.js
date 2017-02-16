import reqwest from 'reqwest'

// server code
const CODE_SUCCESS = 0
const CODE_FAIL = -1

const http = (cmd, method) => {
  return (data) => {
    return reqwest({
      url: `http://120.76.242.237:3000/${cmd}`,
      method,
      data: data,
      timeout: 8000,
      crossOrigin: true,
      withCredentials: true
    }).then(response => {
      if (response.code == CODE_FAIL){
        
      }
      return response

    }, (err, msg) => {
      console.log(err, msg)
      
    })
  }
}

export function httpGet (cmd) {
  return http(cmd, 'get')
}

export function httpPost (cmd) {
  return http(cmd, 'post')
}
