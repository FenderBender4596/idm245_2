gameObj.Controls = function (game) {};

gameObj.Controls.prototype = {
  create: function () {
    console.log('State - Controls');

    var spCntBackground = this.add.image(this.world.centerX, this.world.centerY, 'controlScreen');
    spCntBackground.anchor.setTo(0.5, 0.5);

    var btBack = this.add.button(this.world.centerX-350, this.world.centerY-300, 'back', this.actionOnClick);
    btBack.anchor.setTo(0.5, 0.5);

  },
    actionOnClick: function () {
  	console.log('actionOnClick');
  	this.state.start('Main');
  }
};
