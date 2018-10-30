/* eslint-disable multiline-ternary */
const getWorker = (file, content, options) => {
  let publicPath;
  if (options.publicPath) {
    publicPath = options.evalPath ? options.publicPath : JSON.stringify(options.publicPath);
  } else {
    publicPath = '__webpack_public_path__';
  }

  const publicWorkerPath = `${publicPath} + ${JSON.stringify(file)}`;

  return `require('child_process').fork(${publicWorkerPath})`;
};

export default getWorker;
