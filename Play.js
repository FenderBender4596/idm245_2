gameObj.Play = function (game) {
    var txScore;
    var timerObj;     // timer object
    var txTime;       // display time 
    var timerSeconds; // current time 
    var sPaddle1;     // paddle 1
    var sPaddle2;     // paddle 2
    var speedNum;
    var sBall;         // paddle movement
    var ball_launched; // checks if ball was launched *boolean value*
    var ball_velocity; // speed
};

gameObj.Play.prototype = {
  create: function () {
    console.log('State - Play');
      
        var spGameBackground = this.add.image(this.world.centerX, this.world.centerY, 'gameScreen');
        spGameBackground.anchor.setTo(0.5, 0.5);

        sPaddle1 = this.add.sprite(this.world.centerX-480, this.world.centerY-100, 'paddle1');
        sPaddle2 = this.add.sprite(this.world.centerX+450, this.world.centerY-100, 'paddle2');
        sBall = this.add.sprite(this.world.centerX, this.world.centerY, 'ball');
        sBall.anchor.setTo(0.5,0.5);
//        this.physics.arcade.enable(sBall);
//        sBall.body.collisideWorldBounds = true;
//        sBall.body.bounce.setTo(1,1); 
//      
//        return sBall;
        
        

        // Add walking mummy
        // var sMummy = this.add.sprite(300, 200, 'mummy');
        // //  Here we add a new animation called 'walk'
        // //  Because we didn't give any other parameters it's going to make an animation from all available frames in the 'mummy' sprite sheet
        // var walk = sMummy.animations.add('walk');
        // //  And this starts the animation playing by using its key ("walk")
        // //  30 is the frame rate (30fps)
        // //  true means it will loop when it finishes
        // sMummy.animations.play('walk', 30, true);

        //The numbers given in parameters are the indexes of the frames, in this order: OVER, OUT, DOWN
        var btWin = this.add.button(10, 600, 'winButton', this.winnerFun, this, 1, 0, 2);
        var btLose = this.add.button(110, 600, 'loseButton', this.loserFun, this, 1, 0, 2);
        var btPts = this.add.button(210, 600, 'pointsButton', this.pointsFun, this, 1, 0, 2);

        // var scrBlu = '0';
        //   //for some reason it won't change to 0
        // var scrPnk = '0';

        // var blScore = this.add.text(170, 50, scrBlu0;
        // var pnkScore = this.add.text(750, 50, scrPnk);
        // var timerNum = this.add.text(425, 10, timer);

        gameObj.gScore = 0; 
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
      
        speedNum = 4;      
      
      ball_launched = false;
      ball_velocity = 400;
      this.input.onDown.add(this.launch_ball, this);
      
//      console.log('physics_enabled');
//      this.physics.arcade.enable(sBall);
//      sBall.body.collisideWorldBounds = true;
//      sBall.body.bounce.setTo(1,1); 
//      
//      return sBall;
      
  },
  winnerFun: function () {
  	console.log('YouWin');
  	this.state.start('Winner');
  },
  loserFun: function () {
  	console.log('YouLose');
  	this.state.start('Loser');
  },
    pointsFun: function () {
    console.log('pointsFun called');
    gameObj.gScore+=1;
    txScore.text = gameObj.gScore;
    txScore2.text = gameObj.gScore;
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
      if (gameObj.gScore > 100) {
        this.state.start('Winner');
      } else {
        this.state.start('Loser');
      }
    }
    gameObj.gTime = displayMin + ':' + displaySec;
    txTime.text = gameObj.gTime;
  },
    update: function() {
     if (this.input.keyboard.isDown(Phaser.Keyboard.W)) {
       sPaddle1.y -= speedNum;
    } else if (this.input.keyboard.isDown(Phaser.Keyboard.S)) {
       sPaddle1.y += speedNum;
    } else if (this.input.keyboard.isDown(Phaser.Keyboard.UP)) {
       sPaddle2.y -= speedNum;
    } else if (this.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
       sPaddle2.y += speedNum;
    }
},
ball_move: function() {
    console.log('physics_enabled');
    this.physics.arcade.enable(sBall);
    sBall.body.collisideWorldBounds = true;
    sBall.body.bounce.setTo(1,1); 
      
    return sBall;
},
launch_ball: function(){
  console.log('ball_launched');
  if(ball_launched){
    sBall.x = this.world.centerX;
    sBall.y = this.world.centerY;
//    sBall.body.velocity.setTo(0,0);
    ball_launched = false;
 } else {
    sBall.x -= ball_velocity;
    sBall.y += ball_velocity;
    ball_launched = true;
 }
},  
  render: function(){
}
};
