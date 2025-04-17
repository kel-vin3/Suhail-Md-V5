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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349042451495";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349042451495";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_54_04_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDc1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTksXG4gICAgICAgIDY0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQzLFxuICAgICAgICA3NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxOSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU2LFxuICAgICAgICA3OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2OSxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTAyLFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDgwLFxuICAgICAgICA1NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDAsXG4gICAgICAgIDE5LFxuICAgICAgICA5MixcbiAgICAgICAgMTIyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDc4LFxuICAgICAgICAxOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0LFxuICAgICAgICA0MixcbiAgICAgICAgMjE5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDgzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjgsXG4gICAgICAgIDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNyxcbiAgICAgICAgODMsXG4gICAgICAgIDEzLFxuICAgICAgICAzMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDk5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICAxODQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU3LFxuICAgICAgICA3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDksXG4gICAgICAgIDQ1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTM5LFxuICAgICAgICA5MixcbiAgICAgICAgNTQsXG4gICAgICAgIDk2LFxuICAgICAgICA5MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ29TaWZMdUVzZ1o2NUxmRmp4SCsxTDR3ZCt4K3FIK3BBS1g4bTJYMDBOWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiX2FPdG83SW5SbTJlb2wzZ0FXbTk3QVwiLFxuICBcInBob25lSWRcIjogXCJiODUxMzAyNC0wNzdjLTQ1YjAtYjkzNC02YWQ2MTRiMTYwZjVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE1LFxuICAgICAgMTI1LFxuICAgICAgMjE5LFxuICAgICAgNDEsXG4gICAgICA2NixcbiAgICAgIDE2OSxcbiAgICAgIDUsXG4gICAgICAyLFxuICAgICAgMTUzLFxuICAgICAgNzcsXG4gICAgICAxNTMsXG4gICAgICA5NSxcbiAgICAgIDIxOCxcbiAgICAgIDYyLFxuICAgICAgODEsXG4gICAgICA2OCxcbiAgICAgIDMzLFxuICAgICAgMyxcbiAgICAgIDE3LFxuICAgICAgMjI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM2LFxuICAgICAgMjEyLFxuICAgICAgNSxcbiAgICAgIDE0MSxcbiAgICAgIDE4MCxcbiAgICAgIDE3NyxcbiAgICAgIDIyNixcbiAgICAgIDEyNyxcbiAgICAgIDcyLFxuICAgICAgMjQyLFxuICAgICAgMTIyLFxuICAgICAgMjAsXG4gICAgICA3NSxcbiAgICAgIDc2LFxuICAgICAgNzYsXG4gICAgICAxMjAsXG4gICAgICAyNTIsXG4gICAgICAxNTksXG4gICAgICAzMyxcbiAgICAgIDIxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTWFBTOEJCS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA0MjQ1MTQ5NTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzNTg0MTg4ODAwMjEyMTo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pESTlzZ0hFTUM2K3I4R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiY3BUdE15dWFjcWROcDNPb01pRXZlTW50RDZRb1pUaDU4YW9yQmluaUkwcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIyMXZJRG1XQ2NlblczN3Q4czJIQkd6RUhGbGtnS2QwdmxrTTN2RDRiSWlRV3B1UC85SzlkWFUwMjdPdi90RnRIT3psN0Npby9LRWJieGh3Z25SMTRCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtaUdydnh0UWw2R2pGVnY3aVgxc2psS3BTODh6d2IxNlNyaUcrRG9oWWd5MzRWL1BFMTV5d09iVFkrRG9BbzFrdjU0NnZtZHVLN09QR0JzbktZZk1oQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDQyNDUxNDk1OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDQ3Mzk2NTJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
