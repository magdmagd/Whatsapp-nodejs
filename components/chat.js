                /*
                     Module dependencies.
                */
const { MessageMedia, Location } = require("whatsapp-web.js");
const express = require('express');





        /*
            Constants
            */  

const mediadownloader = (url, path, callback) => 
{
                request.head(url, (err, res, body) => {
                  request(url)
                    .pipe(fs.createWriteStream(path))
                    .on('close', callback)
                })
}//end  mediadownloader       

const router = express.Router() ;


                                            /*
                                                    Coding
                                                   */  


router.post('/sendmessage/:phone', async (req,res) => 
{
    let phone = req.params.phone;
    let message = req.body.message;

    if (phone == undefined || message == undefined) {
        res.send({ status:"error", message:"please enter valid phone and message" })
    } else {
        client.sendMessage(phone + '@c.us', message).then((response) => {
            if (response.id.fromMe) {
                res.send({ status:'success', message: `Message successfully sent to ${phone}` })
            }
        });
    }
});//end post 


router.post('/sendlocation/:phone', async (req, res) => 
{
    let phone = req.params.phone;
    let latitude = req.body.latitude;
    let longitude = req.body.longitude;
    let desc = req.body.description;

    if (phone == undefined || latitude == undefined || longitude == undefined) 
    { 
        res.send({ status: "error", message: "please enter valid Data" })
    }//end if 
     else 
     {
       let loc = await new Location(latitude, longitude, desc || "");
       // loc = new Location(latitude, longitude);
        client.sendMessage(`${phone}@c.us`, loc).then((response)=>{
           // client.sendMessage(phone + '@c.us', loc).then((response) => {
            if (response.id.fromMe) 
            {
                res.send({ status: 'success', message: `MediaMessage successfully sent to ${phone}` })
            }//end if 
        });
    }//end else
});//end send locatio  



router.get('/getchatbyid/:phone', async (req, res) => 
{
    let phone = req.params.phone;
    if (phone == undefined) {
        res.send({status:"error",message:"please enter valid phone number"});
    } else {
        client.getChatById(`${phone}@c.us`).then((chat) => {
            res.send({ status:"success", message: chat });
        }).catch(() => {
            console.error("getchaterror")
            res.send({ status: "error", message: "getchaterror" })
        })
    }
});//end get chat BY ID 


router.get('/getchats', async (req, res) => 
{
    client.getChats().then((chats) => {
        res.send({ status: "success", message: chats});
    }).catch(() => {
        res.send({ status: "error",message: "getchatserror" })
    })
});//end get all chats








module.exports = router ;