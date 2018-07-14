import State from './state';
import { MapBuilder, MapBuilderParameters } from '../builders/map.builder';

// The main state of the game
export default class MainState extends State {
	hexagonWidth = 55;
	hexagonHeight = 45;
	gridSizeX = 15;
	gridSizeY = 24;

	create(): void {
		// Phaser supports some physical engines (p2, box2d, ninja and arcate).
		// For our game, we don't need a strong physical simulation, so we'll choose
		// `arcade` model.
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		let hexagonGroup = new MapBuilder(this.game).build(
			new MapBuilderParameters(
				{ X: this.gridSizeX, Y: this.gridSizeY }, 
				this.hexagonHeight, this.hexagonWidth
			)
		);

		this.game.stage.backgroundColor = "#123445";
	}
}
