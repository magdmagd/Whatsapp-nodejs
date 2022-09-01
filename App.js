                                                /**
                                                 * Module dependencies.
                                                 */
const express = require('express');
const fs =      require('fs');
const bodyParser = require('body-parser');
const createError = require('http-errors');
const morgan = require('morgan');
const { Client , LocalAuth } = require('whatsapp-web.js');
const qrCode = require('qrcode');

//require('dotenv').config();


                                                  /*
                                                    Variables
                                                   */  

const app   = express();
const config = require("./config.json");
const port  = process.env.port || config.port ;






                                                  
                                                      /*  
                                                      
                                                        Coding 

                                                          */
app.use(bodyParser.urlencoded({extended:true}))   ;
app.use(bodyParser.json({limit :"50mb"}));
 

module.exports = app;





 