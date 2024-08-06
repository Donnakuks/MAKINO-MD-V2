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
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = true;                 //make true to view statuses 


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

global.sessID = `{"noiseKey":{"private":{"type":"Buffer","data":"yA2CSMmkV6npIQNmJqLiCjJaJmIBJ0q3Drm8MqPwFGc="},"public":{"type":"Buffer","data":"TD3TDzZK+Txq/fBb+I6qIxQ9xk8M49BMx4X8XE1UlDI="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"SNwtDPVA3HWHxnaTJD++l7ynTmHKWMckmQo43MK1RVA="},"public":{"type":"Buffer","data":"BxTRLwinZOBaN7i7Vjglz4fNdfspthufpDa8A8TPzww="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"SDX+9g1Lvqq+Iw8InmZdeHQWWMFPkoJgqfxZX53+bXQ="},"public":{"type":"Buffer","data":"GcBHPE/eYA0ErONhIz7u+vf7uyQ6rRLh67c4WrfTwlM="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"aG8pJQ5dhQOQWHOCCtMolql1A2phzpkxjHkjBCvrE1A="},"public":{"type":"Buffer","data":"FxhNhoWcEd82YlvCbxEa8yOw05FejlsEXZ64eliv6WQ="}},"signature":{"type":"Buffer","data":"Qy4M8789tWfsak33tgqd89qZ1d8oq/qWcrThT1V0Drd7czKS/JCRQJiQX4rgRJQ50Rzav/TCp0ayu6ImBiZpiA=="},"keyId":1},"registrationId":176,"advSecretKey":"E7w2GrpOwMkvN4VtH+yicJXm3EK4vUcWNRmddzZ0GA4=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"3CpOrncZRga6Akje22YzmA","phoneId":"946d992a-9a0d-4afc-8290-efa5e2aa004e","identityId":{"type":"Buffer","data":"E+/HARE0flZBpTXMSsYP9tRRtYM="},"registered":true,"backupToken":{"type":"Buffer","data":"rmwN0UlcqLVCqV/J0iczhrt3bxU="},"registration":{},"pairingCode":"8ZVXJX4K","me":{"id":"2347019733982:22@s.whatsapp.net","name":"ダーク"},"account":{"details":"CPfa4uQDEPe+yLUGGAUgACgA","accountSignatureKey":"QesFimFvQjBUgZxAcoBsoSTW1ASiTBj/Id4gyxOOr34=","accountSignature":"S+51vt8wCcAtPyyKxY/l5j5AYWDyH4bomKnfe+iNJFaSGBXBdltjlzHV3gVTyqLmrxP+x257rFyYdOwP+7AWAg==","deviceSignature":"lQHRXtoM2EaaDcNG4bnJuzBpLa04MsAR77eqDhcxPwfsX9fm6JVr7js9Jn2uId/gtWZelJ3QWANWqB4tWaWegA=="},"signalIdentities":[{"identifier":{"name":"2347019733982:22@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BUHrBYphb0IwVIGcQHKAbKEk1tQEokwY/yHeIMsTjq9+"}}],"platform":"smba","lastAccountSyncTimestamp":1722949509,"myAppStateKeyId":"AAAAALlr"}`
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
