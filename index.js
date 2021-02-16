const RPC = require("discord-rpc")
const rpc = new RPC.Client({
   transport: 'ipc' 
})

rpc.on('ready', () => {
  var a = 0;
  var i = 1;

  const rond = "🔴,🟠,🟡,🟢,🔵";
  var color = rond.split(",");
  var rondColor;

  function activity1() {
    
    rpc.request('SET_ACTIVITY', {
      
      pid: process.pid,
      activity : {
      details : "📌 Serveur Practice Eu",
      state : "💻 IP ● eu.iripvp.fr",
      assets : {
      large_image : "iripvp-logo",
      large_text : "Iri'Pvp",
      small_image : "v2",
      small_text : "V2",    
      },
  
        buttons : [{label: `${rondColor} Discord`, url: "https://www.discord.com/invite/SQhvgrW567"}]
      },
    })
  }

  function activity2() {
    
    rpc.request('SET_ACTIVITY', {
      
      pid: process.pid,
      activity : {
      details : "📌 Serv Communautaire",
      state : "✅ Recrut Staff On",
      assets : {
      large_image : "blabla",
      large_text : "Bolton Communauté",
      small_image : "discord-logo",
      small_text : "Rejoins mon discord pour devenir un bg comme tout les autres !",    
      },
  
      buttons : [{label : `${rondColor} Discord` , url : "https://www.discord.com/invite/XhxcEYn"}]
      },
    })
  }

  var interval = setInterval (function () {
    if(a == 5){
      a = 0;
    }


    if(i == 1){
      rondColor = color[a];
      activity1();
      a++;
      i++;
    }else if(i == 2){
      rondColor = color[a];
      activity2();
      a++;
      i--;
    }
    

}, 1 * 30000); 

})

rpc.login({ clientId : "808441086103650384" }).catch(console.error);