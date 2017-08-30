gameObj.Main = function (game) {};

gameObj.Main.prototype = {
  create: function () {
    console.log('State - Main');
            //Add background image
        var spMainBackground = this.add.image(this.world.centerX, this.world.centerY, 'startScreen');
        spMainBackground.anchor.setTo(0.5, 0.5);

        //Add title image
        var btStart = this.add.button(this.world.centerX, this.world.centerY+100, 'strtButton', this.playFun, this, 1, 0, 2);
        btStart.anchor.setTo(0.5, 0.5);

        //Add button
        //The numbers given in parameters are the indexes of the frames, in this order: OVER, OUT, DOWN
        var btControls = this.add.button(this.world.centerX, this.world.centerY+175, 'controls', this.controlFun, this, 1, 0, 2);
        btControls.anchor.setTo(0.5, 0.5);

  //       //Add list graphics
  //       var spMarker = this.add.sprite(this.world.centerX - 230, this.world.centerY - 70, 'small_marker');
  //       var spWhiteCell = this.add.sprite(this.world.centerX - 230, this.world.centerY + 30, 'small_white_cell');
  //       var spHealthyCell = this.add.sprite(this.world.centerX - 230, this.world.centerY + 140, 'small_healthy_cell');
  //       var spTime = this.add.sprite(this.world.centerX - 230, this.world.centerY + 230, 'small_time');
  },
  playFun: function () {
  	console.log('actionOnClick');
  	this.state.start('Play');
  },
  controlFun: function () {
    console.log('actionOnClick');
    this.state.start('Controls');
  }

};
