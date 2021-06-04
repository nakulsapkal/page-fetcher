const request = require('request');
const fs = require('fs');
const { connect } = require('http2');

const URL = process.argv[2];
const filePath = process.argv[3];

request(URL, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  fs.writeFile(filePath, body, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log('File written Successfully!');
    //file written successfully
  })
});