
const Discord = require("discord.js");
const Yaxi = new Discord.Client();
//////// playing or dnd  streaming ////////
Yaxi.on("ready", ($wara) => {
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
    var join = Yaxi.channels.get("863435293545332746"); /// id voice
    if (join) join.join();
  });
//////////////// tokn lera da bne 
Yaxi.login("Copy Token, paste somewhere to see it    ODY1MTkzNzE4NDEwOTAzNTcx.YPAc_Q.TxmDCB8Tu1e7QuGQQiwNetBtoQc");
