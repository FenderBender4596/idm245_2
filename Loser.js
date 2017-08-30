gameObj.Loser = function (game) {};

gameObj.Loser.prototype = {
  create: function () {
    console.log('State - Loser');

        var spLoser = this.add.sprite(this.world.centerX, this.world.centerY, 'loserScreen');
        spLoser.anchor.setTo(0.5, 0.5);

        var btTry = this.add.button(this.world.centerX-150, this.world.centerY+150, 'tryAgain', this.replayFun, this, 1, 0, 2);

        var scoreStr = gameObj.gScore;
        var timeStr = gameObj.gTime;

        var txScore = this.add.text(170, 50, scoreStr);
        var txScore2 = this.add.text(760, 50, scoreStr);
        var txTime = this.add.text(this.world.centerX-75 , 25, timeStr);

        txScore.fill = 'black';
        txScore.font = 'Press Start 2P';
        txScore.fontSize = 36;
      
        txScore2.fill = 'black';
        txScore2.font = 'Press Start 2P';
        txScore2.fontSize = 36;

        txTime.fill = 'black';
        txTime.font = 'Press Start 2P';
        txTime.fontSize = 36;
  },
  replayFun: function () {
    console.log('replayFun');
    this.state.start('Play');
  }
};
