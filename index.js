const RPC = require("discord-rpc")
const rpc = new RPC.Client({
   transport: 'ipc' 
})

rpc.on('ready', () => {
    
    rpc.request('SET_ACTIVITY', {
      
      pid: process.pid,
      activity : {
      details : "Discord bot rich presence",
      state : "Re-dev + explication en français",
      assets : {
      large_image : "Regarde le dossier README.md",
      large_text : "Texte qui sera afficher quand on passe la souris dessus",
      small_image : "Regarde le dossier README.md",
      small_text : "Texte qui sera afficher quand on passe la souris dessus",    
      },
  
        buttons : [{label: "Nom du bouton", url: "Le lien qui sera ici est celui qui sera activé quand quelqu'un clique sur le bouton"}]
      },
    })

})

rpc.login({ clientId : "Regarde le dossier README.md" }).catch(console.error);
