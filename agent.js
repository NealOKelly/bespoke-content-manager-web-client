// https://github.com/julie-ng/nodejs-certificate-auth/blob/master/client/agent.js

const https = require('https');
const fs = require('fs');
const path = require('path');

// For more `https.Agent` options, see here:
// https://nodejs.org/api/https.html#https_https_request_options_callback

module.exports = function (name) {
	//const certFile = path.resolve(__dirname, `${name}-key.pem`);
	//const keyFile = path.resolve(__dirname, `${name}-cert.pem`);
	certFile = './api-client-cert.pem'
	keyFile = './api-client-key.pem'
	return new https.Agent({
		cert: fs.readFileSync(certFile),
		key: fs.readFileSync(keyFile),
		rejectUnauthorized: false
	});
};