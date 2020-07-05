class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hidden();
    textSize(30);
    text("Game Start",120,300);
    player.fetchPlayerInfo();
    if(allPlayers !== undefined){
      var displayPos = 130;
      for(var plr in allPlayers){
        if(plr === "player" + player.index){
          fill("red");
          
        }
        else{
          fill("black");
        }
        displayPos += 20;
        textSize(15);
        text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 120,displayPos);
      }
    }
    if(keyDown(UP_ARROW) && player.index !== null){
      player.distance += 20;
      player.update();
    }
  }
}
