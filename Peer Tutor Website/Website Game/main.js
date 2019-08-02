const config = {
  type: Phaser.AUTO,
  width:900,
  height:507,
  backgroundColor: 0xdda0dd,
  scene: {
    preload,
    create,
    update,
  },
  physics:{
    default: 'arcade',
    arcade: {
      gravity: {y:300},
      debug: false,
    }
  }
};

const game = new Phaser.Game(config);


const gameState = {score: 0};
var music;
function preload(){
  this.load.image('background','Website Game/assets/background.png');
  this.load.image('player',"Website Game/assets/avatar.png");
  this.load.image('player_right',"Website Game/assets/avatar_right.png");
  this.load.image('ramen',"Website Game/assets/ramen.png");
  this.load.image('platform',"Website Game/assets/platform.png");
  this.load.image('jason',"Website Game/assets/jason.png");
  this.load.image('poison',"Website Game/assets/poison.png");
  this.load.audio('pokemon', "Website Game/assets/pokemon2.mp3");
};

function create(){
  gameState.background=this.add.image(450, 250, 'background');
  gameState.player = this.physics.add.sprite(50,300, 'player');
  gameState.player.setBounce(0.2);

  gameState.platforms = this.physics.add.staticGroup();
  gameState.platforms.create(455, 440, 'platform');

  //Add music
  gameState.pokemon=this.sound.add('pokemon');
  gameState.musicText = this.add.text(525, 25, 'Click Anywhere to Play Music!', { fontSize: '20px', fill: '#000000' });


  gameState.player.setCollideWorldBounds(true);
  this.physics.add.collider(gameState.player,gameState.platforms)

  gameState.cursors = this.input.keyboard.createCursorKeys();

  //Ramen generator
  gameState.ramen = this.physics.add.group();
  function ramenGen () {
    const xCoord = Math.random() * 900;
    gameState.ramen.create(xCoord, 10, 'ramen');
  }

  const ramenGenLoop = this.time.addEvent({
    delay:2000,
    callback: ramenGen,
    callbackScope: this,
    loop:true,
  })

  //Jason generator
  gameState.jason = this.physics.add.group();
  function jasonGen () {
    const xCoord = Math.random() * 900;
    gameState.jason.create(xCoord, 10, 'jason');
  }

  jasonGenLoop = this.time.addEvent({
    delay:600,
    callback: jasonGen,
    callbackScope: this,
    loop:true,
  })

  //Poison generator
  gameState.poison = this.physics.add.group();
  function poisonGen () {
    const xCoord = Math.random() * 900;
    gameState.poison.create(xCoord, 10, 'poison');
  }

  const poisonGenLoop = this.time.addEvent({
    delay:6000,
    callback: poisonGen,
    callbackScope: this,
    loop:true,
  })


  gameState.scoreText = this.add.text(50, 25, 'Score: 0', { fontSize: '30px', fill: '#000000' });


  //Ramen score
  this.physics.add.overlap(gameState.player, gameState.ramen, ramen2, null, this);

  function ramen2(player, ramen){
    ramen.disableBody(true,true);

    gameState.score += 10;
    gameState.scoreText.setText(`Score: ${gameState.score}`);
};

  //Jason score
  this.physics.add.overlap(gameState.player, gameState.jason, jason2, null, this);

  function jason2(player, jason){
    jason.disableBody(true,true);

    gameState.score -= 10;
    gameState.scoreText.setText(`Score: ${gameState.score}`);
  };

  //Poison score
  this.physics.add.overlap(gameState.player, gameState.poison, poison2, null, this);

  function poison2(player, poison){
    poisonGenLoop.destroy();
    jasonGenLoop.destroy();
    ramenGenLoop.destroy();
    this.physics.pause();
    this.add.text(380,190,'Game Over',{fontSize: '30px', fill: '#000000'});
    this.add.text(320, 230, 'Click to Restart', {fontSize: '30px', fill:'#000000'});
    this.input.on('pointerup',()=>{
      gameState.score=0;
      this.scene.restart();
    });
  };

  gameState.background.setInteractive();
  gameState.background.on('pointerup',function(){
    gameState.pokemon.play();
  })
};

function update(){
  if (gameState.cursors.right.isDown){
    gameState.player.setVelocityX(400);
  }
  else if (gameState.cursors.left.isDown){
    gameState.player.setVelocityX(-400);
  }else{
    gameState.player.setVelocityX(0);
  }


//Jason speed
  //for (i=600; getMinutes()=2

};

//game.state.add('GameState', gameState);
//game.state.start('GameState');
