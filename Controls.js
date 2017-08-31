gameObj.Controls = function (game) {};

gameObj.Controls.prototype = {
  create: function () {
    console.log('State - Controls');

    var spCntBackground = this.add.image(this.world.centerX, this.world.centerY, 'controlScreen');
    spCntBackground.anchor.setTo(0.5, 0.5);

    var btBack = this.add.button(this.world.centerX-350, this.world.centerY-300, 'back', this.goHome);
    btBack.anchor.setTo(0.5, 0.5);

  },
    goHome: function() {
    console.log('wentHome');
    this.state.start('Main');
  }
};
