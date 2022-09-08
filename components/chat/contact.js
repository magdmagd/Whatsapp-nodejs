                                            /**
                                                 * Module dependencies.
                                                 */

const express = require('express');





                                                  /*
                                                    Constants
                                                   */  

const router = express.Router() ;





                                                    /*
                                                    Coding
                                                   */  
                                                  
router.get('/getcontacts', (req, res) => 
{
    client.getContacts().then((contacts) => 
    {
        res.send(JSON.stringify(contacts));
    });
});//Ready Status 

  

                     




module.exports = router ;