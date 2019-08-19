/**
Pink: No effect
Green: No effect
Red: Act as solid walls
Yellow: Shock (move back to previous tile)
Orange: Changes the player's flavour to "Orange"
Purple: Change the player's flavour to "Lemon" and act as ice
Blue:
	- If the blue tile is adjacent to a yellow tile, the blue tiles act identically to a yellow tile.
	- If the player's flavour is "Orange", the blue tile acts identically to the yellow tile.
	- If neither of the above conditions is met, the blue tile acts identically to a pink tile. 
 **/

function setup() {
	createCanvas(400, 400);
	generateTiles();
}

var keys = [];

var Tile = function(x, y, size, effect) {
	this.x = x;
	this.y = y;
	this.size = size;
	this.effect = effect;
};
Tile.prototype.draw = function() {
	var x = this.x;
	var y = this.y;
	var s = this.size;

	noStroke();
	if (this.effect === 0) {
		fill(254, 192, 193); // pink
	} else if (this.effect === 1) {
		fill(159, 253, 128); // green
	} else if (this.effect === 2) {
		fill(252, 66, 70); // red
	} else if (this.effect === 3) {
		fill(255, 253, 136); // yellow
	} else if (this.effect === 4) {
		fill(253, 192, 85); // orange
	} else if (this.effect === 5) {
		fill(190, 28, 190); // purple
	} else if (this.effect === 6) {
		fill(66, 74, 251); // blue
	}
	rect(x - s / 2, y - s / 2, s, s);
};

var tiles0 = [];
var tiles1 = [];
var tiles2 = [];
var tiles3 = [];
var tiles4 = [];
var tiles5 = [];
var tiles6 = [];
var tiles7 = [];
var tiles8 = [];
var tiles9 = [];
var tiles10 = [];

var screenOffset = 0;
var xPos = 9;
var yPos = 9;
var generateTiles = function() {
	for (var i = 9; i >= 0; i--) {
		var t = new Tile(20 + xPos * 40, 20 + yPos * 40, 40, floor(random(0, 6.9)));
		tiles0[i] = t;

		xPos--;
	}

	yPos++;
	xPos = 9;
	for (var i = 9; i >= 0; i--) {
		var t = new Tile(20 + xPos * 40, 20 + yPos * 40, 40, floor(random(0, 6.9)));
		tiles1[i] = t;

		xPos--;
	}

	yPos++;
	xPos = 9;
	for (var i = 9; i >= 0; i--) {
		var t = new Tile(20 + xPos * 40, 20 + yPos * 40, 40, floor(random(0, 6.9)));
		tiles2[i] = t;

		xPos--;
	}

	yPos++;
	xPos = 9;
	for (var i = 9; i >= 0; i--) {
		var t = new Tile(20 + xPos * 40, 20 + yPos * 40, 40, floor(random(0, 6.9)));
		tiles3[i] = t;

		xPos--;
	}

	yPos++;
	xPos = 9;
	for (var i = 9; i >= 0; i--) {
		var t = new Tile(20 + xPos * 40, 20 + yPos * 40, 40, floor(random(0, 6.9)));
		tiles4[i] = t;

		xPos--;
	}

	yPos++;
	xPos = 9;
	for (var i = 9; i >= 0; i--) {
		var t = new Tile(20 + xPos * 40, 20 + yPos * 40, 40, floor(random(0, 6.9)));
		tiles5[i] = t;

		xPos--;
	}

	yPos++;
	xPos = 9;
	for (var i = 9; i >= 0; i--) {
		var t = new Tile(20 + xPos * 40, 20 + yPos * 40, 40, floor(random(0, 6.9)));
		tiles6[i] = t;

		xPos--;
	}

	yPos++;
	xPos = 9;
	for (var i = 9; i >= 0; i--) {
		var t = new Tile(20 + xPos * 40, 20 + yPos * 40, 40, floor(random(0, 6.9)));
		tiles7[i] = t;

		xPos--;
	}

	yPos++;
	xPos = 9;
	for (var i = 9; i >= 0; i--) {
		var t = new Tile(20 + xPos * 40, 20 + yPos * 40, 40, floor(random(0, 6.9)));
		tiles8[i] = t;

		xPos--;
	}

	yPos++;
	xPos = 9;
	for (var i = 9; i >= 0; i--) {
		var t = new Tile(20 + xPos * 40, 20 + yPos * 40, 40, floor(random(0, 6.9)));
		tiles9[i] = t;

		xPos--;
	}

	yPos++;
	xPos = 9;
	for (var i = 9; i >= 0; i--) {
		var t = new Tile(20 + xPos * 40, 20 + yPos * 40, 40, floor(random(0, 6.9)));
		tiles10[i] = t;

		xPos--;
	}
};

var getTile = function(pX, pY) {
	if (pY === tiles0[0].y) {
		for (var i = 0; i < tiles0.length; i++) {
			var t = tiles0[i];
			var tX = t.x;

			if (pX === tX) {
				return t.effect;
			}
		}
	} else if (pY === tiles1[0].y) {
		for (var i = 0; i < tiles1.length; i++) {
			var t = tiles1[i];
			var tX = t.x;

			if (pX === tX) {
				return t.effect;
			}
		}
	} else if (pY === tiles2[0].y) {
		for (var i = 0; i < tiles2.length; i++) {
			var t = tiles2[i];
			var tX = t.x;

			if (pX === tX) {
				return t.effect;
			}
		}
	} else if (pY === tiles3[0].y) {
		for (var i = 0; i < tiles3.length; i++) {
			var t = tiles3[i];
			var tX = t.x;

			if (pX === tX) {
				return t.effect;
			}
		}
	} else if (pY === tiles4[0].y) {
		for (var i = 0; i < tiles4.length; i++) {
			var t = tiles4[i];
			var tX = t.x;

			if (pX === tX) {
				return t.effect;
			}
		}
	} else if (pY === tiles5[0].y) {
		for (var i = 0; i < tiles5.length; i++) {
			var t = tiles5[i];
			var tX = t.x;

			if (pX === tX) {
				return t.effect;
			}
		}
	} else if (pY === tiles6[0].y) {
		for (var i = 0; i < tiles6.length; i++) {
			var t = tiles6[i];
			var tX = t.x;

			if (pX === tX) {
				return t.effect;
			}
		}
	} else if (pY === tiles7[0].y) {
		for (var i = 0; i < tiles7.length; i++) {
			var t = tiles7[i];
			var tX = t.x;

			if (pX === tX) {
				return t.effect;
			}
		}
	} else if (pY === tiles8[0].y) {
		for (var i = 0; i < tiles8.length; i++) {
			var t = tiles8[i];
			var tX = t.x;

			if (pX === tX) {
				return t.effect;
			}
		}
	} else if (pY === tiles9[0].y) {
		for (var i = 0; i < tiles9.length; i++) {
			var t = tiles9[i];
			var tX = t.x;

			if (pX === tX) {
				return t.effect;
			}
		}
	} else if (pY === tiles10[0].y) {
		for (var i = 0; i < tiles10.length; i++) {
			var t = tiles10[i];
			var tX = t.x;

			if (pX === tX) {
				return t.effect;
			}
		}
	}
};

var player = {
	x: 220,
	y: 220,
	smell: 0, // 0 = none, 1 = orange, 2 = lemon
	draw: function() {
		fill(66, 66, 66);
		noStroke();
		ellipse(this.x, this.y, 20, 20);
	},
	move: function(pX, pY) {
		var effect = getTile(this.x + pX, this.y + pY);

		if (effect === 5) {
			this.smell = 2;

			this.x += pX;
			this.y += pY;

			if (this.y + screenOffset >= 200) {
				screenOffset -= 40;
			}

			effect = getTile(this.x + pX, this.y + pY);
		}

		if (effect === 2) {
			pX = 0;
			pY = 0;
		}

		if (effect === 3) {
			pX = 0;
			pY = 0;
		}

		if (effect === 4) {
			this.smell = 1;
		}

		if (effect === 6 && this.smell === 1) {
			pX = 0;
			pY = 0;
		}

		this.x += pX;
		this.y += pY;

		if (this.y + screenOffset >= 200) {
			screenOffset -= 40;
		}

		if (this.x > 400) {
			this.x = 380;
		}

		if (this.x < 0) {
			this.x = 20;
		}
	}
};

draw = function() {
	background(255, 255, 255);
	push();
	translate(0, screenOffset);

	for (var i = 0; i < tiles0.length; i++) {
		tiles0[i].draw();
	}
	for (var i = 0; i < tiles1.length; i++) {
		tiles1[i].draw();
	}
	for (var i = 0; i < tiles2.length; i++) {
		tiles2[i].draw();
	}
	for (var i = 0; i < tiles3.length; i++) {
		tiles3[i].draw();
	}
	for (var i = 0; i < tiles4.length; i++) {
		tiles4[i].draw();
	}
	for (var i = 0; i < tiles5.length; i++) {
		tiles5[i].draw();
	}
	for (var i = 0; i < tiles6.length; i++) {
		tiles6[i].draw();
	}
	for (var i = 0; i < tiles7.length; i++) {
		tiles7[i].draw();
	}
	for (var i = 0; i < tiles8.length; i++) {
		tiles8[i].draw();
	}
	for (var i = 0; i < tiles9.length; i++) {
		tiles9[i].draw();
	}
	for (var i = 0; i < tiles10.length; i++) {
		tiles10[i].draw();
	}

	if (tiles0[0].y + tiles0[0].size / 2 + screenOffset <= 0) {
		yPos++;
		xPos = 9;
		for (var i = 9; i >= 0; i--) {
			var t = new Tile(20 + xPos * 40, 20 + yPos * 40, 40, floor(random(0, 6.9)));
			tiles0[i] = t;

			xPos--;
		}
	}
	if (tiles1[0].y + tiles1[0].size / 2 + screenOffset <= 0) {
		yPos++;
		xPos = 9;
		for (var i = 9; i >= 0; i--) {
			var t = new Tile(20 + xPos * 40, 20 + yPos * 40, 40, floor(random(0, 6.9)));
			tiles1[i] = t;

			xPos--;
		}
	}
	if (tiles2[0].y + tiles2[0].size / 2 + screenOffset <= 0) {
		yPos++;
		xPos = 9;
		for (var i = 9; i >= 0; i--) {
			var t = new Tile(20 + xPos * 40, 20 + yPos * 40, 40, floor(random(0, 6.9)));
			tiles2[i] = t;

			xPos--;
		}
	}
	if (tiles3[0].y + tiles3[0].size / 2 + screenOffset <= 0) {
		yPos++;
		xPos = 9;
		for (var i = 9; i >= 0; i--) {
			var t = new Tile(20 + xPos * 40, 20 + yPos * 40, 40, floor(random(0, 6.9)));
			tiles3[i] = t;

			xPos--;
		}
	}
	if (tiles4[0].y + tiles4[0].size / 2 + screenOffset <= 0) {
		yPos++;
		xPos = 9;
		for (var i = 9; i >= 0; i--) {
			var t = new Tile(20 + xPos * 40, 20 + yPos * 40, 40, floor(random(0, 6.9)));
			tiles4[i] = t;

			xPos--;
		}
	}
	if (tiles5[0].y + tiles5[0].size / 2 + screenOffset <= 0) {
		yPos++;
		xPos = 9;
		for (var i = 9; i >= 0; i--) {
			var t = new Tile(20 + xPos * 40, 20 + yPos * 40, 40, floor(random(0, 6.9)));
			tiles5[i] = t;

			xPos--;
		}
	}
	if (tiles6[0].y + tiles6[0].size / 2 + screenOffset <= 0) {
		yPos++;
		xPos = 9;
		for (var i = 9; i >= 0; i--) {
			var t = new Tile(20 + xPos * 40, 20 + yPos * 40, 40, floor(random(0, 6.9)));
			tiles6[i] = t;

			xPos--;
		}
	}
	if (tiles7[0].y + tiles7[0].size / 2 + screenOffset <= 0) {
		yPos++;
		xPos = 9;
		for (var i = 9; i >= 0; i--) {
			var t = new Tile(20 + xPos * 40, 20 + yPos * 40, 40, floor(random(0, 6.9)));
			tiles7[i] = t;

			xPos--;
		}
	}
	if (tiles8[0].y + tiles8[0].size / 2 + screenOffset <= 0) {
		yPos++;
		xPos = 9;
		for (var i = 9; i >= 0; i--) {
			var t = new Tile(20 + xPos * 40, 20 + yPos * 40, 40, floor(random(0, 6.9)));
			tiles8[i] = t;

			xPos--;
		}
	}
	if (tiles9[0].y + tiles9[0].size / 2 + screenOffset <= 0) {
		yPos++;
		xPos = 9;
		for (var i = 9; i >= 0; i--) {
			var t = new Tile(20 + xPos * 40, 20 + yPos * 40, 40, floor(random(0, 6.9)));
			tiles9[i] = t;

			xPos--;
		}
	}
	if (tiles10[0].y + tiles10[0].size / 2 + screenOffset <= 0) {
		yPos++;
		xPos = 9;
		for (var i = 9; i >= 0; i--) {
			var t = new Tile(20 + xPos * 40, 20 + yPos * 40, 40, floor(random(0, 6.9)));
			tiles10[i] = t;

			xPos--;
		}
	}

	player.draw();
	pop();

	//println(getTile(player.x, player.y).effect);
};

keyPressed = function() {
	keys[keyCode] = true;

	var speed = 40;
	if (keys[38] && player.y - speed + screenOffset > 0) {
		// up
		player.move(0, -speed);
	}

	if (keys[40]) {
		// down
		player.move(0, speed);
	}

	if (keys[37] && player.x - speed > 0) {
		//left
		player.move(-speed, 0);
	}

	if (keys[39] && player.x + speed < 400) {
		//right
		player.move(speed, 0);
	}
};
keyReleased = function() {
	keys[keyCode] = false;
};
