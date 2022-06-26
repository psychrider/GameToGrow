const edge = 20;
let time;
let arena = [];
let colors = ['blue','pink','yellow','orange','red','green','purple'];


function setup() {
    createCanvas(240, 400);
    player = new Player();
    player.reset();
    time = millis();

    arena = new Array(height / edge);
    for (let i = 0; i < arena.length; i++) {
        arena[i] = new Array(width / edge).fill(0);
    }
    document.getElementById("menu").addEventListener("click",function(){
        window.open("age2menu.php","_self");
    });
}

function draw() {
    background(0);
    drawMatrix(arena, [0, 0]);
    drawMatrix(player.matrix, [player.x, player.y]);
    if ((millis() - time) > 1000) {
        player.drop();
    }

    if (keyIsDown(DOWN_ARROW)) {
        player.drop();
    }
}

function keyPressed() {
    if (keyCode == LEFT_ARROW) {
        player.x--;
        if (collide(arena, player)) { // recovery
            player.x++;
        }
    } else if (keyCode == RIGHT_ARROW) {
        player.x++;
        if (collide(arena, player)) { // recovery
            player.x--;
        }
    } else if (keyCode == UP_ARROW) {
        player.rotate();
        if (collide(arena, player)) { // recovery
            player.rotate();
            player.rotate();
            player.rotate();
        }
    }
}

function drawMatrix(matrix, offset) {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] != 0) {
                noStroke();
                fill(colors[matrix[y][x] - 1]);
                rect((x + offset[0]) * edge, (y + offset[1]) * edge, edge, edge);
            }
        }
    }
}

function mergeMatrices(arena, player) {
    for (let y = 0; y < player.matrix.length; y++) {
        for (let x = 0; x < player.matrix[y].length; x++) {
            if (player.matrix[y][x] != 0) {
                arena[y + player.y][x + player.x] = player.matrix[y][x];
            }
        }
    }
}

function collide(arena, player) {
    for (let y = 0; y < player.matrix.length; y++) {
        for (let x = 0; x < player.matrix[0 ].length; x++) {
            if(player.matrix[y][x] != 0 && (arena[y + player.y] && arena[y + player.y][x + player.x]) != 0) {
                return true;
            }
        }
    }
    return false;
}

function arenaSweep() {
    let rowCount = 1;
    for (let y = 0; y < arena.length; y++) {
        let full = 1;
        for (let x = 0; x < arena[y].length; x++) {
            if (arena[y][x] == 0) {
                full = 0;
                break;
            }
        }
        if (full != 1) continue;
        arena.splice(y, 1);
        arena.unshift(new Array(width / edge).fill(0));
        player.score += 10 * rowCount;
        rowCount *= 2;
    }
}

function createPiece(type) {
    switch (type) {
        case 0:
            return [
                [0, 0, 0],
                [1, 1, 1],
                [0, 1, 0],
            ];
        case 1:
            return [
                [2, 2],
                [2, 2],
            ];
        case 2:
            return [
                [0, 3, 0],
                [0, 3, 0],
                [0, 3, 3],
            ];
        case 3:
            return [
                [0, 4, 0],
                [0, 4, 0],
                [4, 4, 0],
            ];
        case 4:
            return [
                [0, 5, 0, 0],
                [0, 5, 0, 0],
                [0, 5, 0, 0],
                [0, 5, 0, 0],
            ];
        case 5:
            return [
                [0, 6, 6],
                [6, 6, 0],
                [0, 0, 0],
            ];
        case 6:
            return [
                [7, 7, 0],
                [0, 7, 7],
                [0, 0, 0],
            ];
    }
}

function Player() {
    this.x = 0;
    this.y = 0
    this.matrix = null;
    this.score = 0;

    this.reset = function () {
        this.x = (width / edge) / 2 - 1;
        this.y = 0;
        this.matrix = createPiece(Math.floor(Math.random() * 7));
        if (collide(arena, player)) {
            for (let i = 0; i < arena.length; i++) {
                arena[i].fill(0);
            }
        }
        this.updateScore();
        //document.getElementById("score").value = score;
    }

    this.drop = function () {
        this.y++;
        if (collide(arena, this)) {
            this.y--; // recovery
            mergeMatrices(arena, this);
            arenaSweep()
            this.reset();
        }
        time = millis();
    }

    this.rotate = function () {
        this.matrix.reverse();
        for (let y = 0; y < this.matrix.length; y++) {
            for (let x = y + 1; x < this.matrix[y].length; x++) {
                [this.matrix[y][x], this.matrix[x][y]] = [this.matrix[x][y], this.matrix[y][x]];
            }
        }
    }

    this.updateScore = function () {
        document.getElementById("score").value = this.score;
    }
}
