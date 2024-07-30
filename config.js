const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://lyrical4orty6yx:uv4Q2xZLHWnYuaXg@cluster0.fe3knid.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "254794522706" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254794522706";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_48_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDksXG4gICAgICAgIDcwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0LFxuICAgICAgICA4MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAzOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDExLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxODcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDUzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA3MixcbiAgICAgICAgMTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDU5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTExLFxuICAgICAgICA0NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUwLFxuICAgICAgICA0NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDczLFxuICAgICAgICA5OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDksXG4gICAgICAgIDUsXG4gICAgICAgIDkxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgODksXG4gICAgICAgIDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDU5LFxuICAgICAgICA4NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTksXG4gICAgICAgIDY5LFxuICAgICAgICA5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk5LFxuICAgICAgICA0MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDgwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ4LFxuICAgICAgICA4NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNixcbiAgICAgICAgNixcbiAgICAgICAgNTAsXG4gICAgICAgIDk3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImVBSlRaZWJvWi9md0xlZG1vSkdHM3NwOHJIZ1BSNG10ZENGa2xoY0dTU2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0Nzk0NTIyNzA2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwQUQ3Q0MyRTYwREQ2M0ExODgwNzVCQkZDRDgyRURFN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIwNzcyODlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3OTQ1MjI3MDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjY0OUVBRkQ1QkFFQkJFRUU5ODREOTE3MTc5RDE1QzE0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjA3NzI5MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJaeVU4bGdzdlNwS0lENVRRYkVmYjNRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVmZGQxMDY5LTE3MGItNGQzZi1hNTY0LWM3ZDMwNTExNDYzN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MyxcbiAgICAgIDIyOCxcbiAgICAgIDIzLFxuICAgICAgMTY0LFxuICAgICAgODEsXG4gICAgICAxOTEsXG4gICAgICAxMTksXG4gICAgICAxODQsXG4gICAgICAyNDYsXG4gICAgICAxNjMsXG4gICAgICAxOTQsXG4gICAgICAyMjMsXG4gICAgICAxNjEsXG4gICAgICAyMTAsXG4gICAgICAxMzcsXG4gICAgICAxNjYsXG4gICAgICAyMDMsXG4gICAgICAxNTAsXG4gICAgICAxMDcsXG4gICAgICA3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOCxcbiAgICAgIDY5LFxuICAgICAgMjEyLFxuICAgICAgMTc2LFxuICAgICAgNDIsXG4gICAgICAxMTIsXG4gICAgICAyMDQsXG4gICAgICAyMjUsXG4gICAgICAxMDcsXG4gICAgICAxMTEsXG4gICAgICAyNTEsXG4gICAgICAxNjQsXG4gICAgICA1NyxcbiAgICAgIDYwLFxuICAgICAgMjExLFxuICAgICAgNTEsXG4gICAgICAyNixcbiAgICAgIDE4NSxcbiAgICAgIDE5MixcbiAgICAgIDEzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQODEyMTNQRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0Nzk0NTIyNzA2OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5ODgwMTkzMTA1NTEwNDoxMUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJM251SROC5m1RPTkVFXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2UzdFlzREVPQ2drN1VHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJHZHlQc1BQUTBCVUlxM3BpUmJXSkVSNkxFSDhQdU1qT0p5QnJXK2didkE4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInpNQnViTHJEQ3k3UmhZTlp1Q0NYNEJqQlAxNHUzTlB2YWRHSlQwbFNoRzZNK2IwNlFnZFlQN015SFJVdkVZN01YNU01eU5xSlRkUXpQanF6QUY0N0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkpZTWRxVE45MXowdFFYZTRDOE13M0RzaXNTM2JNSVJhQjE3bU9mRS93U1ltYmdiak1tb0JtbXB5V3JwZ21JOXpzOVcwK2JXNm5QakJRclA0cXc3ZWdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc5NDUyMjcwNjoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjA3NzI4MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJKRlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQkpGLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQzByS1BQS1NKN3U2bjFra3BtU0VYLy80N3NoQjgzT0k3Nm5VRFVnc3J0VT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MjkyNTA1MzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjA2NTEyNTI1MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "OMOSH",
  ownername:process.env.OWNER_NAME|| "TONEE",


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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
