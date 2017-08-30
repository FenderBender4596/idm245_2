gameObj.Preloader = function (game) {};

gameObj.Preloader.prototype = {
  preload: function () {
    console.log("State - Preloader");
    this.stage.backgroundColor = '#333'; 

    // progress bar animation code
    this.preloadBg = this.add.sprite((820 - 297) / 2, (700 - 145) / 2, 'preloaderBg');
    this.preloadBar = this.add.sprite((820 - 158) / 2, (700 - 50) /2, 'preloaderBar'); 
    this.load.setPreloadSprite(this.preloadBar);

    this.load.spritesheet('strtButton', 'img/start.png', 185, 65);
    this.load.spritesheet('controls', 'img/controls.png', 309, 65);

    //SCREENS

    this.load.image('startScreen', 'img/startscreen.png');
    this.load.image('controlScreen', 'img/controlsScreen.png');
    this.load.image('gameScreen', 'img/gamescreenbackground.png');
    this.load.image('winnerScreen', 'img/background_win.png');
    this.load.image('loserScreen', 'img/background_lose.png');
    this

    //CONTROLS

    this.load.spritesheet('back', 'img/back.png', 173, 45);

    //PLAY

    this.load.image('paddle1', 'img/paddle1.png', 30, 200);
    this.load.image('paddle2', 'img/paddle2.png', 30, 200);
    this.load.image('ball', 'img/ball.png', 25, 25);

    //WIN

    this.load.spritesheet('home', 'img/home.png', 169, 58);

    //lose
    this.load.spritesheet('tryAgain', 'img/try_again.png', 293, 58);


 //    // load ALL GAME IMAGES into memory
 //    this.load.spritesheet('start', 'img/start.png', 180, 90);

 //    this.load.image('background', 'img/background.png');
 //    this.load.image('logo', 'img/title.png');

 //    this.load.image('small_white_cell', 'img/small_white_cell.png');
 //    this.load.image('small_healthy_cell', 'img/small_healthy_cell.png');
 //    this.load.image('small_time', 'img/small_time.png');
	// this.load.image('small_marker', 'img/small_marker.png');

	// //  37x45 is the size of each frame
	// //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
	// //  blank frames at the end, so we tell the loader how many to load
	// this.load.spritesheet('mummy', 'img/metalslug_mummy37x45.png', 37, 45, 18);
	
	// this.load.spritesheet('playButton', 'img/play_button.png', 180, 90);

	// this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

 //    // Load temp buttons
    this.load.spritesheet('winButton', 'img/btn_win.png', 90, 90);
    this.load.spritesheet('loseButton', 'img/btn_lose.png', 90, 90);
    this.load.spritesheet('pointsButton', 'img/btn_points.png', 90, 90);

    // this.load.image('logoWin', 'img/win_title.png');
        
 //        // Load buttons
 //    this.load.spritesheet('replayButton', 'img/replay_button.png', 180, 90);

    // this.load.image('logoLoser', 'img/lose_title.png');
        
 //    // Load buttons
 //    this.load.spritesheet('replayButton', 'img/replay_button.png', 180, 90);

  },
  create: function () {
  	this.state.start('Main');
  }
};
