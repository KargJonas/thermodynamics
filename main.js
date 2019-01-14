// Jonas Karg 2018

const NODE_SIZE = 20;
const MAX_TEMP = 1000;
const DEFAULT_TEMP = 0;

const GRID_WIDTH = Math.floor(WIDTH / NODE_SIZE);
const GRID_HEIGHT = Math.floor(HEIGHT / NODE_SIZE);

const grid = [];

for (let x = 0; x < GRID_WIDTH; x++) {
  grid[x] = [];

  for (let y = 0; y < GRID_HEIGHT; y++) {
    // could set temp here (3. argument)
    grid[x][y] = new Node(x, y);
  }
}

grid[5][5].temp = 6000;

function forAllNodes(func) {
  grid.map(col => col.map(func));
}

function normalize(amount = 1) {
  for (let i = 0; i < amount; i++) {
    forAllNodes(node => node.normalize());
    forAllNodes(node => node.denormalize());
  }

  forAllNodes(node => node.getColor());
}

forAllNodes(node => node.getNeighbors());
normalize(10);
forAllNodes(node => node.draw());