// eslint-disable-next-line import/prefer-default-export
export const putData = async (event, context) => {
  const p = new Promise(resolve => {
    resolve('success');
  });
  p.then(() =>
    callback(null, {
      message: 'Go Serverless Webpack (Ecma Script) v1.0! First module!',
      event,
    })
  ).catch(e => callback(e));
};
