//get dependencies
const axios = require('axios');
require('dotenv').config();

// constants
const contentManagerUsername = process.env['CONTENT_MANAGER_USERNAME'];
const contentManagerPassword = process.env['CONTENT_MANAGER_PASSWORD'];
const authorizationHeaderValue = "Basic " + Buffer.from(contentManagerUsername + ":" + contentManagerPassword).toString('base64');
const contentManagerServiceAPIBaseUrl = process.env['CONTENT_MANAGER_API_BASE_URL'];



// invoke the CMServiceAPI
function invokeAPI()
	{
		  var config = {
		  method: 'get',
		  url: contentManagerServiceAPIBaseUrl,
		  headers: { 
			'Authorization': authorizationHeaderValue
		  }
		};
		axios(config)
		
		.then(function (response) {

			console.log(response)
			
		})
		.catch(function (error) {
		  
		  console.log(error);
			
		});
	}


console.log(process.env['CONTENT_MANAGER_USERNAME']);
console.log(process.env['CONTENT_MANAGER_PASSWORD']);
invokeAPI()