gameObj.Winner = function (game) {};

gameObj.Winner.prototype = {
  create: function () {
    console.log('State - Winner');

        var spWinBackground = this.add.image(this.world.centerX, this.world.centerY, 'winnerScreen');
        spWinBackground.anchor.setTo(0.5, 0.5);

        //The numbers given in parameters are the indexes of the frames, in this order: OVER, OUT, DOWN
        var btTry = this.add.button(this.world.centerX-150, this.world.centerY+150, 'tryAgain', this.replayFun, this, 1, 0, 2);
        var btHome = this.add.button(this.world.centerX-85, this.world.centerY+225, 'home', this.goHome, this, 1, 0, 2);

        var scoreStr = gameObj.gScore;
        var timeStr = gameObj.gTime;

        var txScore = this.add.text(170, 50, scoreStr);
        var txScore2 = this.add.text(760, 50, scoreStr);
        var txTime = this.add.text(this.world.centerX-75 , 25, timeStr);

        txScore.fill = 'white';
        txScore.font = 'Press Start 2P';
        txScore.fontSize = 36;
      
        txScore2.fill = 'white';
        txScore2.font = 'Press Start 2P';
        txScore2.fontSize = 36;

        txTime.fill = 'white';
        txTime.font = 'Press Start 2P';
        txTime.fontSize = 36;

  },
  replayFun: function () {
    console.log('replayFun');
    this.state.start('Play');
  },
  goHome: function() {
    console.log('wentHome');
    this.state.start('Main')
  }
};
