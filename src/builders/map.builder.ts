export class MapBuilderParameters {
    constructor(
        public gridSize: { X: number, Y: number },
        public tileHeight: number,
        public tileWidth: number
    ) { }
}

export class MapBuilder {
    constructor(private game: Phaser.Game) { }

    build(params: MapBuilderParameters) {
        let group = this.game.add.group();

        for (var i = 0; i < params.gridSize.X / 2; i++) {
            for (var j = 0; j < params.gridSize.Y; j++) {
                if (params.gridSize.X % 2 == 0 || i + 1 < params.gridSize.X / 2 || j % 2 == 0) {
                    var hexagonX = params.tileWidth * i * 1.5 + (params.tileWidth / 4 * 3) * (j % 2);
                    var hexagonY = params.tileHeight * j / 2;
                    var hexagon = this.game.add.sprite(hexagonX, hexagonY, "tile");
                    group.add(hexagon);
                }
            }
        }

        group.x = 12;
        group.y = 10;
        
        return group;
    }
}