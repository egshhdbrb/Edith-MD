const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "EDITH-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0dsaEZPZDBCZGNBcThsUDNFSHhqR3A2b2FYc2ZxZXZubVAwSkRZTFVHcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibTN4VTNiOW5CN3pWLzZqeGI3SXdTcEtWQTMrNjBtajVqaGtnYmFudHNGOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TUlsUzVZQWF5NnR4d1p4WklXaUdEaFdtekJiakpzOVREMlM5RWxUUDBVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0WExpY0Z6U2d5eGxZOXM0RDc1NFdneWxNbm5XMi9MeUd6TllId3hDSzFnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNJQXBGYmFWV01SZGNpOUx5c1hGUWFEaFYrUmJTVlZvVmZFRGdSVlFYM1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlB3d1lEMWVtczIrd2tzQklGU2dZVlNMVHJwUVdFdjJFTnpXVFFDWUVuaDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkN0RFM4RTVBSjYwSlpzdzlHZG9vams1YW1oY0R5Q0oxNlI3ZEsvT2Exbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREVCYUhmcHBpNzVRb0hRQ1liTXJ3bjJ5U1lvYWNGTWhoeEV0N29MaDBrdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFwUkpMVXVhcXdybnNsek8wbHNJaFZ2L3I0aVRJb2oxZ1lBZ3J1OExoZGo0ejdaMXBmK3lka0Z4SFBGa09FcWx0RjZ6bURqb3JBNFFDMVhuUWlXd2pnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzUsImFkdlNlY3JldEtleSI6InFwN0p2aSsrTXFDTGV2T1J2VXN3U0dyaEZVcHlhM2lLMVhEdHFMQVczc289IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkVESVRIMTIzIiwibWUiOnsiaWQiOiI5MjM0OTc4MTI4OTM6MjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoibWVkaWNhbCBzdHVkZW50IiwibGlkIjoiMjQ0MDQwNjEyMjEyODk4OjI2QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSmJRcUEwUTlwaVJ4UVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUnFGc3pWaGtDdTA5OVNpYUZiTW4xUzJqT2dNaXVqdFJUZkxKbERSNTAwdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoicXF2L3JIcUNHYXRONk4wOTRIT3UxcjkwbW0vTjNqdTk2NG5BdllhVWJqYUR1UlpwZ25hQm05RWd0UE9NU0tPK0hoZ1RHSExHL3BNL3d1Wlp3bXRzRHc9PSIsImRldmljZVNpZ25hdHVyZSI6Ik5FNFY4OFU4OFh0T0JPbnAvbmxZNGpscndsNmEyaHU2dTVYRzhtY2FFYTlmWEVtSDU1Um5uNUYvRXEvT0Q1Z2RRYTJWTENUWTd2YVhLa1dQQlFhaGpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDk3ODEyODkzOjI2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVhaGJNMVlaQXJ0UGZVb21oV3pKOVV0b3pvRElybzdVVTN5eVpRMGVkTk0ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTU5Nzk0NiwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQQjQifQ==",
  START_IMG: process.env.START_IMG || "https://h.uguu.se/gKzTwMZh.jpg",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS EDITH-MD*",
  WELCOME: process.env.WELCOME || "false",
  ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
  PREFIX: process.env.PREFIX || ".",
  MENTION_REPLY: process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://h.uguu.se/gKzTwMZh.jpg",
  BOT_NAME: process.env.BOT_NAME || "EDITH-MD",
  STICKER_NAME: process.env.STICKER_NAME || "EDITH-MD",
  CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  DELETE_LINKS: process.env.DELETE_LINKS || "false",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "923253617422",
  OWNER_NAME: process.env.OWNER_NAME || "Bandaheali",
  DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Bandaheali*",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *EDITH-MD*⚡",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  AUTO_REACT: process.env.AUTO_REACT || "false",
  ANTI_BAD: process.env.ANTI_BAD || "false",
  MODE: process.env.MODE || "public",
  ANTI_LINK: process.env.ANTI_LINK || "true",
  ANTI_MEDIA: process.env.ANTI_MEDIA || "false",
  AUTO_VOICE: process.env.AUTO_VOICE || "false",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  READ_CMD: process.env.READ_CMD || "false",
  DEV: process.env.DEV || "923253617422",
  ANTI_VV: process.env.ANTI_VV || "false",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
};
