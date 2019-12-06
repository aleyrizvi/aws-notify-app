export const response = (statusCode=500, res) => {
  //defining body of the response
  const body = JSON.stringify({
    code: statusCode,
    err: isError(statusCode),
    data: res
  },null,2)
  
  //preparing aws response template
  const template = {
    statusCode: statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
    },
    body
  }

  return template
}

const isError = (code) => {
  return (code >= 200 && code <= 299) ? false : true
}
