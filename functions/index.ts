import * as functions from 'firebase-functions';
const universal = require(`${process.cwd()}/dist/server`).app;
console.log(process.cwd());
export const ssr = () => {
  console.log('running ssr');
  return functions.https.onRequest(universal);
};
