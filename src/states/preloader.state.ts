import State from './state';

const tile = require('assets/images/HK_utility-solid_014.png');

// The state for loading core resources for the game
export default class PreloaderState extends State {
  preload(): void {
    console.debug('Assets loading started');

    this.game.load.image('tile', tile)
  }

  create(): void {
    console.debug('Assets loading completed');

    this.game.state.start('main'); // Switch to main game state
  }
}
