const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_56_05_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMyxcbiAgICAgICAgOTksXG4gICAgICAgIDg5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTUyLFxuICAgICAgICA2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMyLFxuICAgICAgICAyOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDM4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA5NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDUxLFxuICAgICAgICAxODksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4LFxuICAgICAgICA5MixcbiAgICAgICAgMTU0LFxuICAgICAgICA3OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDYzLFxuICAgICAgICA1OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk4LFxuICAgICAgICAzMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk5LFxuICAgICAgICA0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUxLFxuICAgICAgICA3LFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDUzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDQzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjksXG4gICAgICAgIDQxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDksXG4gICAgICAgIDQzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDk4LFxuICAgICAgICA0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDgwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJzYlE0dzNWSEhhQk1UTm9zb21GdDM0Nndra20rMjBONGtXTVlzekd0aXVvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIUnd5WjVYUlNIV2tuZWxnVGt5M2JBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc2OTk5ZjFlLWQ3YmQtNGQ1Ni04NWJkLTk3MThiY2VkNDc1ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjcsXG4gICAgICAyMzEsXG4gICAgICA4MCxcbiAgICAgIDE5LFxuICAgICAgMTcsXG4gICAgICAxMixcbiAgICAgIDYxLFxuICAgICAgMjAyLFxuICAgICAgMjYsXG4gICAgICA0MyxcbiAgICAgIDE5NixcbiAgICAgIDY5LFxuICAgICAgMTAyLFxuICAgICAgNTksXG4gICAgICAxMzYsXG4gICAgICA0NCxcbiAgICAgIDIxOSxcbiAgICAgIDEyOSxcbiAgICAgIDIxNSxcbiAgICAgIDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDMsXG4gICAgICAyNixcbiAgICAgIDIwNSxcbiAgICAgIDg1LFxuICAgICAgNTAsXG4gICAgICA5NixcbiAgICAgIDE2MixcbiAgICAgIDE3OSxcbiAgICAgIDIyOCxcbiAgICAgIDI3LFxuICAgICAgNTMsXG4gICAgICAyMjcsXG4gICAgICAxNDEsXG4gICAgICA1NixcbiAgICAgIDI0NyxcbiAgICAgIDc3LFxuICAgICAgMjAzLFxuICAgICAgMjAzLFxuICAgICAgMTMsXG4gICAgICA0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXWExWNUwxUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA2MTE5NDkwMDozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc5MjAxMzk3MTY0NTozNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPalRqcklERUtDKzBySUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkMyTnBJRlBnVUtMVzdMWkdVZ1pKakxYRGJPOUMyNUxJaUV2TlhERVJTMW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNi90c3RxU1ZPZlRlRnl3OCtKeStLbTJBNGV1V2pjYlRyWG4xbmZQOVNCV1cyTXhEcU82cEI0QVFRUzRGcXhOLzVibzRVNmdpZE9KQ1F6eC95Y1FvQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWXRzME9XN2E4UkxCekxVanRYMkMxa0xML3hOc0xoNkhMaVFabVZQZCtXUTk5TzhEQXd2eGs1ZEFSTXJUbU90Yys4WSs3QzU3QmRWYXRjVXRCZHdCQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA2MTE5NDkwMDozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY4MjE3OThcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
