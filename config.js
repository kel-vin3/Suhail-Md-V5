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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348103283453";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348103283453";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_21_04_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTk1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDc4LFxuICAgICAgICA2OCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzksXG4gICAgICAgIDc4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0LFxuICAgICAgICA1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgODYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICA0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDgzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk2LFxuICAgICAgICA2NCxcbiAgICAgICAgODYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzIsXG4gICAgICAgIDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDYyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3OCxcbiAgICAgICAgODMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODQsXG4gICAgICAgIDg1LFxuICAgICAgICA3LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUyLFxuICAgICAgICA3NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDYyLFxuICAgICAgICA1NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTksXG4gICAgICAgIDc0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MyxcbiAgICAgICAgODUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExLFxuICAgICAgICAxMzgsXG4gICAgICAgIDUyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODQsXG4gICAgICAgIDY0LFxuICAgICAgICA1MixcbiAgICAgICAgMjI4LFxuICAgICAgICA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgODAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTksXG4gICAgICAgIDcxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTY0LFxuICAgICAgICA2NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA3MixcbiAgICAgICAgODYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTczLFxuICAgICAgICA4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLRDk3NzNzRWhNK0IxSGpMMUNNYU02dytmQU1tRFd6VEVQc1VFZkhSMVVNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQRzBxUFdrY1FsV3VhSi1sVGlyV2pBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRiN2E4MWQ0LTk2MTgtNDQ4Ny05ZDllLTA1YmI3NzU2ZjEyNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTgsXG4gICAgICAxNDYsXG4gICAgICAyMzIsXG4gICAgICA2NSxcbiAgICAgIDE3MixcbiAgICAgIDEyNCxcbiAgICAgIDg2LFxuICAgICAgMTg4LFxuICAgICAgMjE4LFxuICAgICAgMTIyLFxuICAgICAgMTE1LFxuICAgICAgNzEsXG4gICAgICAyMTEsXG4gICAgICAxODgsXG4gICAgICAxMDAsXG4gICAgICAzNCxcbiAgICAgIDM1LFxuICAgICAgNjYsXG4gICAgICAxMixcbiAgICAgIDEyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI4LFxuICAgICAgMTE4LFxuICAgICAgMTI0LFxuICAgICAgODcsXG4gICAgICAwLFxuICAgICAgMTA3LFxuICAgICAgMjIyLFxuICAgICAgMTM0LFxuICAgICAgMjEwLFxuICAgICAgMTA5LFxuICAgICAgMjQ0LFxuICAgICAgMTMsXG4gICAgICA5MCxcbiAgICAgIDE5MixcbiAgICAgIDUzLFxuICAgICAgMTUwLFxuICAgICAgODQsXG4gICAgICAxNjcsXG4gICAgICA1OCxcbiAgICAgIDE5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tIbjU3NEdFT2I1L3I4R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZTRKZDB5NmM5bGRjcHplOXRpdjdSZXpXaEYzdmxPdVZDLzRpVGhxdmJCZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ1N3REYVlqN2tsU1c5WEl6RDFraG1FZ1c5dkRuYnI3N1VHWDRxcWs0U0ZNVGFuZVJtOTFISStVZHpBc0ErbmtzbUUyZC9lbDVwb1crMUxJdFJnY3dBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ3dzE3alN3VHBtLy9taGZaeFRaVEV2dDdUbGNtNVZqOGYybm9BTTBLcUlma1ZBd05MUFNFMDNWOGtOb3Eyb2NoaFZJTTdBOGF5d1NiQllvaFRVN05BUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDMyODM0NTM6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkRpa2FjaGlcIixcbiAgICBcImxpZFwiOiBcIjE5MjExODE4MjExNzU2MDo2QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwMzI4MzQ1Mzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDQ4MTMyOTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDKzZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUMrNS5qc29uIjogIntcImtleURhdGFcIjpcIlVReHZUZHI3VkJyb2UxelNDekpyclFNT0Qybk9FbU1lUEZQcE5rTGQ5d1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc0MjMzNjkyNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NDgwNDU2OTQ2OVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUMrNi5qc29uIjogIntcImtleURhdGFcIjpcIjhIYXhabkJMRXh5b2paS292aUNnR0Qwcnd3VmxtT3pwQ3JsUHZZK3VrM1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc0MjMzNjkyOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NDgwNDY0OTgyMVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
