import State from './state';

const tileClassic = require('assets/images/HK_utility-solid_014.png');
const tilePoint = require('assets/images/HK_utility-fow_005.png');
const tileLine = require('assets/images/HK_utility-fow_006.png');

// The state for loading core resources for the game
export default class PreloaderState extends State {
  preload(): void {
    console.debug('Assets loading started');

    this.game.load.image('tile-classic', tileClassic);
    this.game.load.image('tile-point', tilePoint);
    this.game.load.image('tile-line', tileLine);
  }

  create(): void {
    console.debug('Assets loading completed');

    this.game.state.start('main'); // Switch to main game state
  }
}
