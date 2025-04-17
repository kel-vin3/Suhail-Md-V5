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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348123794374";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348123794374";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_41_04_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMixcbiAgICAgICAgOTQsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDM2LFxuICAgICAgICA4MixcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDU1LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzLFxuICAgICAgICA3OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODgsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDY3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDksXG4gICAgICAgIDg3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NixcbiAgICAgICAgNTgsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAxLFxuICAgICAgICA4MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMixcbiAgICAgICAgMTA4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgODQsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDgxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTk0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDg5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyLFxuICAgICAgICAzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzksXG4gICAgICAgIDU3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODAsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibGRYeFFrTTIrb3hxZ3FVQXFmWUl3cUxsQ2l4RWxidkZCUVBjbGVRUFBVQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTEd4MjQ4alZRS3lVMjJZdHpGUVV6d1wiLFxuICBcInBob25lSWRcIjogXCJmN2FlNjQwMy0xMTUzLTRhNDgtYjQwNS0xYzVhNzlmZTQ4MTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIwLFxuICAgICAgODUsXG4gICAgICAyNTQsXG4gICAgICAxMzAsXG4gICAgICAzMyxcbiAgICAgIDE4NSxcbiAgICAgIDU5LFxuICAgICAgNixcbiAgICAgIDE0LFxuICAgICAgMTc4LFxuICAgICAgNTcsXG4gICAgICAzMixcbiAgICAgIDczLFxuICAgICAgMTI4LFxuICAgICAgMTM1LFxuICAgICAgMjEsXG4gICAgICAxMixcbiAgICAgIDU2LFxuICAgICAgMTcxLFxuICAgICAgMjMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNixcbiAgICAgIDgsXG4gICAgICAzMixcbiAgICAgIDI1MyxcbiAgICAgIDEyNyxcbiAgICAgIDE2NixcbiAgICAgIDExOCxcbiAgICAgIDEzLFxuICAgICAgMTA0LFxuICAgICAgMTU3LFxuICAgICAgMjQ4LFxuICAgICAgNTEsXG4gICAgICAxNzUsXG4gICAgICA2OCxcbiAgICAgIDIyMSxcbiAgICAgIDk4LFxuICAgICAgNTUsXG4gICAgICAyMTcsXG4gICAgICA2MyxcbiAgICAgIDE3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tHU3F2Y05FTEdaZzhBR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiS3VJYUk0b1Z1OWpCQm9DemFyOXVISSs1N1Y4eVh5L0VxSmhYcWFnU2Vraz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXdXBxMU13emJmck9RYm91QVNMRnUxakZZSzRGaFpFcDdsdDdFQ0o3cytqNkx4bWFmbGprR0Q5bUdXeEtOVkdnUzlzdlVERjRWKzlDRTd6ci9WQ3FpQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJnTVduRXl0OEtZMUtHTFJGUVFzczZJWUEyYmIzNkJIejB1MXBDYTh6OFZuUFljWlp6RmMvenRmaFdLNzNGNnBvSi94U21ERDE1Z1J6TTl2QkNyaGxoUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMjM3OTQzNzQ6NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2MjI4MDk2OTE5MTY0MTo1NUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMjM3OTQzNzQ6NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDQ4ODI4Njlcbn0iCn0="  // PUT your SESSION_ID 


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
