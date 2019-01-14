const neighborCoords = [
  [-1, -1], [+0, -1], [+1, -1],
  [-1, +0],/* [0,0] */[+1, +0],
  [-1, +1], [+0, +1], [+1, +1],
];

class Node {
  constructor(gridX, gridY, temp = DEFAULT_TEMP) {
    this.temp = temp;
    this.gridX = gridX;
    this.gridY = gridY;
    this.normalized = false;
    this.color = "rgb(0,0,0)";

    const absoluteX = gridX * NODE_SIZE;
    const absoluteY = gridY * NODE_SIZE;

    this.drawX = absoluteX;
    this.drawY = absoluteY;
  }

  getNeighbors() {
    this.neighbors = [];
    for (let i = 0; i < neighborCoords.length; i++) {
      const neighbor = neighborCoords[i];
      const x = this.gridX + neighbor[0];
      const y = this.gridY + neighbor[1];

      if (grid[x] !== undefined && grid[x][y] !== undefined) {
        this.neighbors.push([x, y]);
      }
    }
  }

  normalize() {
    if (this.normalized) return;
    let sum = 0;
    this.neighbors.map(neighbor => sum += grid[neighbor[0]][neighbor[0]].temp);
    this.temp = sum / this.neighbors.length;
    this.normalized = true;
    this.neighbors.map(neighbor => grid[neighbor[0]][neighbor[0]].normalize());
  }

  getColor() {
    const red = this.temp / MAX_TEMP * 255;
    const blue = 255 - red;

    this.color = `rgb(${red},0,${blue})`;
  }

  draw() {
    c.fillStyle = this.color;
    c.fillRect(this.drawX, this.drawY, NODE_SIZE, NODE_SIZE);
  }

  denormalize() {
    this.normalized = false;
  }
}