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

  
router.get('/getcontact/:phone', async (req, res) => 
{
    let phone = req.params.phone;

    if (phone != undefined) 
    {
        client.getContactById(`${phone}@c.us`).then((contact) => 
        {
            res.send(JSON.stringify(contact));
        }).catch((err) => {
            res.send({ status: 'error', message: 'Not found' });
        });
    }//end if
});//end getContatID

router.get('/getprofilepic/:phone', async (req, res) => {
    let phone = req.params.phone;

    if (phone != undefined) 
    {
        client.getProfilePicUrl(`${phone}@c.us`).then((imgurl) => 
        {
            if (imgurl) 
            {
                res.send({ status: 'success', message: imgurl });
            }//end if 
            else 
            {
                res.send({ status: 'error', message: 'Not Found' });
            }//end else 
        })//end client
    }//end if
});//End Get profile PIC 

router.get('/isregistereduser/:phone', async (req, res) => 
{
    let phone = req.params.phone;
    
    if (phone != undefined) {
        client.isRegisteredUser(`${phone}@c.us`).then((is) =>
         {

            is ? res.send({ status: 'success', message: `${phone} is a whatsapp user` })
                : res.send({ status: 'error', message: `${phone} is not a whatsapp user` });
        })
    } 
    else
     {
        res.send({ status: 'error', message: 'Invalid Phone number' });
     }//end else 
});
                     




module.exports = router ;