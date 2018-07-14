export class MapBuilderParameters {
    constructor(
        public gridSize: { X: number, Y: number },
        public tileHeight: number,
        public tileWidth: number
    ) { }
}

export class MapBuilder {
    constructor(private game: Phaser.Game) { }

    private static readonly TileNames = [
        'tile-point', 'tile-line'
    ]

    build(params: MapBuilderParameters) {
        let group = this.game.add.group();

        for (var i = 0; i < params.gridSize.X / 2; i++) {
            for (var j = 0; j < params.gridSize.Y; j++) {
                if (params.gridSize.X % 2 == 0 || i + 1 < params.gridSize.X / 2 || j % 2 == 0) {
                    var hexagonX = params.tileWidth * i * 1.5 + (params.tileWidth / 4 * 3) * (j % 2);
                    var hexagonY = params.tileHeight * j / 2;
                    var hexagon = this.game.add.sprite(hexagonX, hexagonY, 'tile-classic');
                    group.add(hexagon);
                    if (Math.random() > 0.5) {
                        var hexagon = this.game.add.sprite(hexagonX, hexagonY, MapBuilder.randomTile());
                        group.add(hexagon);
                    }
                }
            }
        }

        group.x = 12;
        group.y = 10;
        
        return group;
    }

    private static randomTile(): string {
        return this.TileNames[Math.floor(Math.random()*this.TileNames.length)];
    }
}