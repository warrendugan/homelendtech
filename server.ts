(global as any).WebSocket = require('ws');
(global as any).XMLHttpRequest = require('xhr2');

import 'zone.js/dist/zone-node';
import { enableProdMode } from '@angular/core';
import * as express from 'express';
import { join } from 'path';

// Express server
export const app = express();

// const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist/browser');

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {
  AppServerModuleNgFactory,
  LAZY_MODULE_MAP,
  ngExpressEngine,
  provideModuleMap
} = require('./dist/server/main');

const bodyParser = require('body-parser');
require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUNT_TOKEN;
const client = require('twilio')(accountSid, authToken);

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine(
  'html',
  ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [provideModuleMap(LAZY_MODULE_MAP)]
  })
);

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies

app.post('/verify/send', (req, res) => {
  client.verify
    .services(process.env.TWILIO_VERIFICATION_SERVICE_TOKEN)
    .verifications.create({ to: `+1${req.body.phone}`, channel: 'sms' })
    .then((verification) => {
      console.log(verification.sid);
      res.status(200).send();
    });
});

app.post('/verify/check', (req, res) => {
  client.verify
    .services('VA0abd6c67e9ea6b675aeca7a3d1f1b395')
    .verificationChecks.create({ to: `+1${req.body.phone}`, code: req.body.code })
    .then((verification_check) => {
      console.log(verification_check);
      res.status(200).send({ verified: verification_check });
    });
});

// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });
// Serve static files from /browser
app.get(
  '*.*',
  express.static(DIST_FOLDER, {
    maxAge: '1y'
  })
);

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// Start up the Node server
// app.listen(PORT, () => {
//   console.log(`Node Express server listening on http://localhost:${PORT}`);
// });
