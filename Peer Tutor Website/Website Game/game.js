var game = new Phaser.Game(640, 360, Phaser.AUTO);

var GameState = {
  preload: function(){
    this.load.image('girl','Website Game/Assets/avatar.png');
  },
  create: function(){
    this.girl = this.game.add.sprite(200,200, 'girl');
  },
  update: function(){

  }
};
// title: https://i2.wp.com/media.boingboing.net/wp-content/uploads/2015/07/tumblr_nm6j1ghB7C1qze3hdo1_500.gif?resize=500%2C288

game.state.add('GameState', GameState);
game.state.start('GameState');
