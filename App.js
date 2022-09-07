                                                /**
                                                 * Module dependencies.
                                                 */
const express = require('express');
const fs =      require('fs');
const bodyParser = require('body-parser');
const createError = require('http-errors');
const morgan = require('morgan');
const { Client , LocalAuth } = require('whatsapp-web.js');
const qrCode = require('qrcode-terminal');

//require('dotenv').config();


                                                  /*
                                                    Variables
                                                   */  

const app   = express();
const config = require("./config.json");
const port  = process.env.port || config.port ;
const client = new Client();

                                                      /*  
                                                      
                                                        Coding 

                                                          */
app.use(express.json());                                                         
app.use(bodyParser.urlencoded({extended:true}))   ;
app.use(bodyParser.json({limit :"50mb"}));



client.on('qr', (qr) => 
{
  qrCode.generate(qr, { small: true });
});//Generate QR Code 



client.on("authenticated",()=>
{

  console.log("Client Authinticated Successfully") ;

});

client.on('auth_failure', msg => 
{
  // Fired if session restore was unsuccessfull
  console.error('AUTHENTICATION FAILURE', msg);
  process.exit();
});//check session restore was unsuccessfull


client.on('ready', () => 
{
  console.log('Client is ready!');
});//Ready Status 

client.on('disconnected',()=>
{
  console.log('Client is disconnected!');
});//Client was disconnected 

client.on('message', message => 
{
	console.log(message.body);
});//Read Message

client.on('message', message => 
{
	if(message.body === 'ping') {
		message.reply('pong');
	}
});//Read & Check Message

 
client.initialize();

app.listen(port,()=>
{
  console.log("Server Is Running on "+port);
});//Create Listen Service for app 
 

module.exports = app;





 