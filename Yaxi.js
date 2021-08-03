
const Discord = require("discord.js");
const Yaxi = new Discord.Client();
//////// playing or dnd  streaming ////////
Yaxi.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `You only live once, so try to live for God.`,
 
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    Yaxi.user.setActivity(STREAMING, {      
    type: "STREAMING", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
///////////////////////
Yaxi.on("ready", () => {
    var join = Yaxi.channels.get(""); /// id voice
    if (join) join.join();
  });
//////////////// tokn lera da bne 
Yaxi.login("mfa.NHg8Bk-_ZWFNH12O1GO5d_Xmv8nTIL3tbOl3JX6Uh2dXkkX0JKFmBhb2KEw-_Exorl92d69W_eXGHZA2r007");
