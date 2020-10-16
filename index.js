// This app is intended to demonstate that it is possible to use a combination of Client Certificate Authentication and 
// Basic Authentication to access the Content Manager API: Client Certification Authentication secures the TLS connection
// and Basic Authentication is used to the user authorization process.



//  The following node packages are used:
//  1) axios - see: https://github.com/axios/axios
//  2) dotenv - see: https://www.npmjs.com/package/dotenv
//  3) https://www.npmjs.com/package/fs
//  4) https://www.npmjs.com/package/dateformat



//get dependencies
const axios = require('axios');
require('dotenv').config();
const dateFormat = require('dateformat');

// constants
const contentManagerUsername = process.env['CONTENT_MANAGER_USERNAME'];
const contentManagerPassword = process.env['CONTENT_MANAGER_PASSWORD'];
const authorizationHeaderValue = "Basic " + Buffer.from(contentManagerUsername + ":" + contentManagerPassword).toString('base64');
const contentManagerServiceAPIBaseUrl = process.env['CONTENT_MANAGER_API_BASE_URL'];
const agent = require('./agent');


//set global variables
var gblCreateRecordJSON = {
	"RecordTitle":"Certificate Authentication & Basic Authentication",
	"RecordRecordType":"Document"
}

// invoke the CMServiceAPI
function invokeCMServiceAPI(jsonData)
	{
		var config = {
		  httpsAgent: agent('api-client'),
		  method: 'post',
		  url: contentManagerServiceAPIBaseUrl + '/Record',
		  headers: { 
			'Authorization': authorizationHeaderValue, 
			'Content-Type': 'application/json', 
		  },
		  data : JSON.stringify(jsonData)
		};
		axios(config)
		
		.then(function (response) {

			console.log(getTimeStamp(), green + "New Content Manager record successfully created.", resetColor)
			
		})
		.catch(function (error) {
		  console.log(getTimeStamp(), red + "Error creating Content Manager record.", resetColor)
		  console.log(error);
		});
	}

invokeCMServiceAPI(gblCreateRecordJSON)




