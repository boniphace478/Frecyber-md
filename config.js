//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "frediezra60@gmail.com";
global.location = "Dar Es Salam,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Frecyber/Frecyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1d4a42b28790d0f7a7195.jpg";
global.devs = "255620814108,255764182801,255776663848";
global.sudo = process.env.SUDO || "255620814108,255764182801,255776663848";
global.owner = process.env.OWNER_NUMBER || "255620814108,255764182801,255776663848";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "typing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUZwdTkxRHN0angwdTU3TjZCck1GVlFtRFFaNkVSL0NqcnVnK2w5K05IYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUJNNmFIcGtwM00xaGVSc1NZSG9WaGV2U08rbER5YllOV0R5bUJtMlp6VT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZRWlkWEZxN1MyU2tpdjJya3lDVEdPWkpURmZ6cVcyMTJFY2JYNTZUZDJVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4Q1dWSmkxYVZXQlFjQmIyQTljMmNpbnNIbGk0b291NkNtb1docTRYWjFnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFJL1o1bGh3cVFJWkhqaWpuUDMzQjRKYUV6TGhHWGRCWk5ONkczS0Q5V009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRZTFRYY1BrWU44YzBoeVZTK2tEZUFWeC9WVnRGNVErelZGVGlaczlra2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUM1dFdLKzZ5Z1grcjFmdWpKWjhoTnJmRkZkT1gzQWFHczJmb3NsbmpITT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0xBN0JLNHhmR0x0WHNQVjREU0NERXFDTlJqcndtNVd0eUgrT3BDbzJRND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1KY3Z1V0xvcDFHZkFwb3ZhTUY2UndIMFdrOTczc0l6MW13ZXNXUWh2NkZWa01jZEdFNmdNd0JrdDV0WFFxRHo0bjdKckRlUFNQNXpVSTFOeU9XQ0JnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ0LCJhZHZTZWNyZXRLZXkiOiJFVTRZM1UzTWtTdHMyT3E0RjR1VDZDT1BnNndVMXJKMEhMNk9RV0pUR2RrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJJVDlhM3FfSVN2LXdzbzJ2YnRrUmJ3IiwicGhvbmVJZCI6ImU2MTEyMmVmLTY0NDAtNGZlOC04Yjc1LTcyM2I1ZDE3ZmM1NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2K2Nnc0V5dmJoOWhuMEk4RElBNUtUVkhyWXM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibWN6NktHK0w3b0FVRzEwTEFEMFZacC9tdTk4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjQ3NEQzUVQ3IiwibWUiOnsiaWQiOiIyNTU3MTY2NjE1Njk6NjhAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09EOXFib0ZFTm5nNTdVR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImU1MVV6VVl6K0hSdU5HR1JlVFFzRU1XenhBVkN3SVNOOXJzY3REeE5xamc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjV2UmFaS0NobC9MYWFTSEFYQks1RWU3NER2SDVFYjIzRXlGMk1SNXQ2UEN4L1d4M2lWTEk0Zm1qOTdDMyt4ZjJjUEtYcEgycEwxdm5ST0Q3TCs0M0NnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIzbmZTN2NFLzNEaUNGd01vZStHVi9tWHNMOU1SNTRNL3dBdlF4dDRXM1FUOHhYTDdoN0RwZ3BPZ0pRbUt6ZjVTY3Eyd2VlR1ZOYkg3MlR3MnZZcEhDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTcxNjY2MTU2OTo2OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYdWRWTTFHTS9oMGJqUmhrWGswTEJERnM4UUZRc0NFamZhN0hMUThUYW80In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzNDYxNzM0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZlTyJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐅𝚪𝚵𝐂𝐘𝚩𝚵𝚪 𝚳𝐃",
  author: process.env.PACK_AUTHER || "FRECYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "FRECYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "FRECYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
