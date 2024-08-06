const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = true;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = [""];
global.OwnerNumber = ["2347019733982"];
global.ownertag = [""]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Makino-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"WAytLFN4dR7VX4BwDAzRWu8ahL+ThfotMyMlxBT8oV4="},"public":{"type":"Buffer","data":"ysx3v1NjIxPQXKv7Y4r2BjST3j0jBc5YpnmmNvSIuUo="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"sEO7/4cMfzQo8ZAMztvwndpVZv+c2Xv0K0gnmGrxxX0="},"public":{"type":"Buffer","data":"GD9Zz9QbIkvPmnJlRD05DH6uCb+cuPg0VNs0b1eUfQ8="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"yNfUcCIbbdeGENLh2oowbjkYXto6CfLUMGwytWoaO14="},"public":{"type":"Buffer","data":"J59koElg9xtuidh9pzCNskE9fm3jG1jPN+WVlB0n/EY="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"qNaPFRfljkJQSP2M/j/PsDeRthCR7ffBdWLNGDfgZ3M="},"public":{"type":"Buffer","data":"WMt0nSXnoDDpVPDtxGYP3qVMyfEEypayHBO/EUL8fAg="}},"signature":{"type":"Buffer","data":"ZTp0xWNuRqoZVeHcZZGWWNfZl7e0crVJJSdsGENYzF9FlZm8gahu8kFh3EmmBFBjNoyCQKQQINp9Ag4BAiUdiA=="},"keyId":1},"registrationId":103,"advSecretKey":"CQGDCxyvMbWRsBGwcFEYBPT/ZGJf7ZalienjDJX7H9Y=","processedHistoryMessages":[{"key":{"remoteJid":"2347019733982@s.whatsapp.net","fromMe":true,"id":"0ACDDCCC1D51E5AFA0B289935173DB9F"},"messageTimestamp":1722946617},{"key":{"remoteJid":"2347019733982@s.whatsapp.net","fromMe":true,"id":"906127A5A5DD19005435CC49A1124E1B"},"messageTimestamp":1722946617}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"_WXTze2fRsC6j4O-0M7Mhw","phoneId":"711ba2a6-26b0-474a-ac1d-965f42e7d217","identityId":{"type":"Buffer","data":"p/EjfbBtM6TAHt5PGXAaPHMyb2E="},"registered":true,"backupToken":{"type":"Buffer","data":"OJAsOpdXWlVIdU4yBBRKcQE15xI="},"registration":{},"pairingCode":"AD8TK2L4","me":{"id":"2347019733982:18@s.whatsapp.net","name":"ダーク"},"account":{"details":"CPfa4uQDEKaoyLUGGAEgACgA","accountSignatureKey":"QesFimFvQjBUgZxAcoBsoSTW1ASiTBj/Id4gyxOOr34=","accountSignature":"FO4wf5trkKsQafjGW5bSLGbUZBkVgBkrvtqChGHIkwsGdN/2/fHTotU4WvO1aCAghFHXzF86CeX47/usqJypCQ==","deviceSignature":"iRW0BqGL2oskFJQqscYfaXqUmkZ7eYx+A9u3F4XTkicE5ZsZTCTq4KiATeefBxdNcJPb68fCF7vcbjSMprpkhA=="},"signalIdentities":[{"identifier":{"name":"2347019733982:18@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BUHrBYphb0IwVIGcQHKAbKEk1tQEokwY/yHeIMsTjq9+"}}],"platform":"smba","lastAccountSyncTimestamp":1722946612}`
global.prefa = ["."]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
