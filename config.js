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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_32_04_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDY1LFxuICAgICAgICA3NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIwLFxuICAgICAgICA5NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAzMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAzNixcbiAgICAgICAgMTAxLFxuICAgICAgICAzNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA3OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIsXG4gICAgICAgIDE4LFxuICAgICAgICA0MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOSxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNixcbiAgICAgICAgMzgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNSxcbiAgICAgICAgODQsXG4gICAgICAgIDczLFxuICAgICAgICAzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDgsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDgzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTUsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDkyLFxuICAgICAgICA1NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzgsXG4gICAgICAgIDgzLFxuICAgICAgICAxODksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwLFxuICAgICAgICA5OCxcbiAgICAgICAgNTksXG4gICAgICAgIDI5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDk3LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjI1LFxuICAgICAgICA0MixcbiAgICAgICAgNTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNixcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzksXG4gICAgICAgIDUwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNyxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDk4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDMzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICA4OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxODksXG4gICAgICAgIDM1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDU0LFxuICAgICAgICA4NixcbiAgICAgICAgMTAzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTc4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQk1Jb0JORGM3UlVTbXJlTjNJQVh3b0hLWWxnaHdZUWpCL1JKc0tZejd1ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOHpSRzZ5bDNTcldSbUVoeTZUMXhaUVwiLFxuICBcInBob25lSWRcIjogXCJhMWQ4ZjkwOC05MWJlLTQ2ODctOGFjNS1iYjMyZTIyYTBlZTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUwLFxuICAgICAgMTEzLFxuICAgICAgMzQsXG4gICAgICAyNTQsXG4gICAgICAyMyxcbiAgICAgIDEwMyxcbiAgICAgIDMyLFxuICAgICAgMixcbiAgICAgIDM5LFxuICAgICAgMjAwLFxuICAgICAgMTE4LFxuICAgICAgNTcsXG4gICAgICAxNzQsXG4gICAgICAyMzUsXG4gICAgICA4NCxcbiAgICAgIDkyLFxuICAgICAgMjA4LFxuICAgICAgNjcsXG4gICAgICAxNjYsXG4gICAgICAxMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUzLFxuICAgICAgMTgyLFxuICAgICAgOTEsXG4gICAgICAxNTYsXG4gICAgICAxMzcsXG4gICAgICAxMjUsXG4gICAgICAxMzYsXG4gICAgICAxMzIsXG4gICAgICAxNDAsXG4gICAgICAxNDMsXG4gICAgICA1NCxcbiAgICAgIDE4NCxcbiAgICAgIDIzNyxcbiAgICAgIDExLFxuICAgICAgMzAsXG4gICAgICAxODUsXG4gICAgICA3NSxcbiAgICAgIDI1LFxuICAgICAgMTI0LFxuICAgICAgNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMS0oweXNRcU5xRXdBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkt1SWFJNG9WdTlqQkJvQ3phcjl1SEkrNTdWOHlYeS9FcUpoWHFhZ1Nla2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMGowUExlYzRsVWhoSzdRQThSUHFiZ1BYVG5kYjR4VlRUQlROUzg2VU4vSFZPdTFqTm0vQkVKT0locDJnYzREcWZsWFg5a21kbjdsNGhDaTlVZUdualE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVm1qNzlacnAzUDBJbFI4OE12RGpaakZTdHRueTJjYTZXNVdQY0QzeFhINXF4TENMdlFmcG1sc0RBVGQxaWIzT2hWZ0JmT3NtMnYyQ204NTdaMVY1aWc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTIzNzk0Mzc0OjU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjIyODA5NjkxOTE2NDE6NTZAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTIzNzk0Mzc0OjU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ0OTA3NTYzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQXZuXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBdm4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFYVU0T2JBOFVidktCNGFUM0h5cHVGSFYyT29TaHErTFBaSEF5UENtUjlBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkxNTM4NjEwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDQ5MDc1NzA0MDhcIn0iCn0="  // PUT your SESSION_ID 


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
