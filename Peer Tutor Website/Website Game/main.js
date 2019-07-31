const config = {
  type: Phaser.AUTO,
  width:600,
  height:600,
  backgroundColor: 0xdda0dd,
  scene: {
    preload,
    create,
    update,
  }
};

const game = new Phaser.Game(config);


const gameState = {};

function preload(){
  //this.load.image('background','assets/title.gif');
  this.load.image('girl',"assets/avatar.png");
};

function create(){
  //gameState.background=this.add.image(20, 30, 'background');
  gameState.girl = this.add.sprite(50,50,70,70, 'girl');
  gameState.cursors = this.input.keyboard.createCursorKeys();

};

function update(){
  if (gameState.cursors.right.isDown){
    gameState.girl.x += 1;
  }
};

game.state.add('GameState', gameState);
game.state.start('GameState');
