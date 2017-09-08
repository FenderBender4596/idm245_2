gameObj.Play = function (game) {
    var txScore;
    var txScore2;
    var timerObj;     // timer object
    var txTime;       // display time 
    var timerSeconds; // current time 
    var sPaddle1;     // paddle 1
    var sPaddle2;     // paddle 2
    var speedNum;
    var sBall;         // paddle movement
    var soundsLoadedFlag; // all sounds loaded
//    var ball_launched; // checks if ball was launched *boolean value*
//    var ball_velocity; // speed
};

gameObj.Play.prototype = {
  create: function () {
    console.log('State - Play');
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.physics.arcade.checkCollision.left = false;
        this.physics.arcade.checkCollision.right = false;
        var spGameBackground = this.add.image(this.world.centerX, this.world.centerY, 'gameScreen');
        spGameBackground.anchor.setTo(0.5, 0.5);
        sPaddle1 = this.add.sprite(this.world.centerX-480, this.world.centerY-100, 'paddle1');
        sPaddle2 = this.add.sprite(this.world.centerX+450, this.world.centerY-100, 'paddle2');
        sBall = this.add.sprite(this.world.centerX, this.world.centerY, 'ball');
        this.physics.enable([sPaddle1,sPaddle2,sBall], Phaser.Physics.ARCADE);
        sPaddle1.body.immovable = true;
        sPaddle2.body.immovable = true;
        sBall.body.collideWorldBounds = true;
      
        
      
        var startBtn = this.add.button(10, 600, 'strtButton', this.ballMove, this, 1, 0, 2);
        //The numbers given in parameters are the indexes of the frames, in this order: OVER, OUT, DOWN
//        var btWin = this.add.button(10, 600, 'winButton', this.winnerFun, this, 1, 0, 2);
//        var btLose = this.add.button(110, 600, 'loseButton', this.loserFun, this, 1, 0, 2);
//        var btPts = this.add.button(210, 600, 'pointsButton', this.pointsFun, this, 1, 0, 2);

        gameObj.gScore;
        gameObj.gScore2;
        var scoreStr = '0';
        var timeStr = '2:00';

        txScore = this.add.text(170, 50, scoreStr);
        txScore2 = this.add.text(760, 50, scoreStr);
        txTime = this.add.text(this.world.centerX-50, 30, timeStr);

        txScore.fill = 'white';
        txScore.font = 'Press Start 2P';
        txScore.fontSize = 36;
      
        txScore2.fill = 'white';
        txScore2.font = 'Press Start 2P';
        txScore2.fontSize = 36;

        txTime.fill = 'white';
        txTime.font = 'Press Start 2P';
        txTime.fontSize = 26;
    // set up timer
        timerSeconds = 120; 
    // Create a timer object
        timerObj = this.game.time.create(false);
    // Set a timer event to occur every 1 second
        timerObj.loop(1000, this.updateTimerFun, this) 
    // Start said timer 
        timerObj.start();
      
        speedNum = 10;           
      
paddleObj = this.add.audio('paddle');
soundsLoadedFlag = false;
    this.sound.setDecodedCallback([paddleObj], this.soundsLoadedFun, this);
      
  },
//  winnerFun: function () {
//  	console.log('YouWin');
//  	this.state.start('Winner');
//  },
//  loserFun: function () {
//  	console.log('YouLose');
//  	this.state.start('Loser');
//  },
//    pointsFun: function () {
//    this.physics.arcade.overlap
//    console.log('pointsFun called'); 
//    txScore.text = gameObj.gScore;
//    txScore2.text = gameObj.gScore2;
//},

ballMove: function(){
        sBall.body.velocity.setTo(400 + Math.random() * 200,300 + Math.random() * 200);
        sBall.body.bounce.set(1,1);
	
},
  updateTimerFun: function () {
    console.log('updateTimerFun');
    timerSeconds--;
    if (timerSeconds > 0) {
      // txTime.text = timerSeconds;
      var displayMin = Math.floor(timerSeconds / 60) % 60;
      var displaySec = Math.floor(timerSeconds) % 60;
      if (displaySec < 10) {
        displaySec = '0' + displaySec;
      }
    } else {
      //Time is up
      if (gameObj.gScore > 11) {
        this.state.start('Winner');
      } else {
        this.state.start('Loser');
      }
    }
    gameObj.gTime = displayMin + ':' + displaySec;
    txTime.text = gameObj.gTime;
}, 

    update: function() {
    console.log('paddles_move');      
    this.physics.arcade.collide(sPaddle1, sBall);
    this.physics.arcade.collide(sPaddle2, sBall);
    
        
    var sBallposition = sBall.body.x;
    console.log(sBall.body.x);
        
    if (sBall.body.x < 0) {
        console.log('p2 scored');
        this.state.start ('Winner');
        gameObj.gScore2++;
        txScore2.text = gameObj.gScore2;
     } else if (sBall.body.x > 960) {
        console.log('p1 scored');
        this.state.start ('Loser');
        gameObj.gScore++;
        txScore.text = gameObj.gScore;
    };

        
     if (this.input.keyboard.isDown(Phaser.Keyboard.W)) {
       sPaddle1.y -= speedNum;
    } else if (this.input.keyboard.isDown(Phaser.Keyboard.S)) {
       sPaddle1.y += speedNum;
    } else if (this.input.keyboard.isDown(Phaser.Keyboard.UP)) {
       sPaddle2.y -= speedNum;
    } else if (this.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
       sPaddle2.y += speedNum;
    } else {
       sPaddle1.body.velocity.setTo(0, 0);
       sPaddle2.body.velocity.setTo(0, 0);   
    };
    
     if (soundsLoadedFlag == true) {
         paddleObj.play();
     } else {
         console.log('still dwnld/decode sounds');
     }
               
},
resetBall: function(){
    console.log('ballresetenabled');
    sBall.body.reset(this.world.centerX, this.world.centerY);
    sBall.body.velocity.y = 100 + Math.random() * 200;
}, 
soundsLoadedFun: function(){
    console.log('soundsLoadedFun');
    soundsLoadedFlag = true;
},   
  render: function(){
//      this.debug.spriteInfo(sBall, 23, 23);
}
};
