
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
    var join = Yaxi.channels.get("1023242460824076328"); /// id voice
    if (join) join.join(1023242460824076328);
  });
//////////////// tokn lera da bne 
Yaxi.login("ODA0MDYyNzEyMjE1NzY1MDUy.GSEXJV.DdubLBbyiDlo41gwEWnfRVAff_rvHGGiJ9fC4s");
