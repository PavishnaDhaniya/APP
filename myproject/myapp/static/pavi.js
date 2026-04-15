const container = document.getElementById("puzzle-container");
let tiles = [];
let firstTile = null;

// Create Puzzle
function createPuzzle() {
    container.innerHTML = "";
    tiles = [];

    for (let i = 0; i < 9; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");

        let row = Math.floor(i / 3);
        let col = i % 3;

        tile.style.backgroundPosition = `${-col * 100}px ${-row * 100}px`;

        tile.addEventListener("click", () => selectTile(tile));

        tiles.push(tile);
        container.appendChild(tile);
    }
}

// Select Tile
function selectTile(tile) {
    if (!firstTile) {
        firstTile = tile;
        tile.classList.add("selected");
    } else {
        swapTiles(firstTile, tile);
        firstTile.classList.remove("selected");
        firstTile = null;
    }
}

// Swap Tiles
function swapTiles(tile1, tile2) {
    let temp = tile1.style.backgroundPosition;
    tile1.style.backgroundPosition = tile2.style.backgroundPosition;
    tile2.style.backgroundPosition = temp;
}

// Shuffle
function shuffleTiles() {
    for (let i = 0; i < 50; i++) {
        let a = Math.floor(Math.random() * 9);
        let b = Math.floor(Math.random() * 9);
        swapTiles(tiles[a], tiles[b]);
    }
}

// Load Puzzle
window.onload = function () {
    createPuzzle();
};