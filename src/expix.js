// https://code.google.com/p/paintweb/source/browse/src/paintweb.js

function ExquisitePixel(win, doc) {
};

// Initialize ExquisitePixel.
this.init = function(handler) {
};

this.canvasInit = function() {
	canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');

	//canvasGrid = document.getElementById('grid');
	//contextGrid = canvasGrid.getContext('2d');

	width = canvas.width;
	height = canvas.height;

	context.strokeStyle = 'black';

	canvas.addEventListener('mousemove', function(e) {
		var mousePos = getMousePos;
		
		if (bloop) {
			var currentCell = posToGrid(offsetX(e), offsetY(e));
        	drawPixel(currentCell.x, currentCell.y);
		}
	});

	canvas.addEventListener('mousedown', function(e) {
        bloop = true;
        var currentCell = posToGrid(offsetX(e), offsetY(e));
        drawPixel(currentCell.x, currentCell.y);
    });

    canvas.addEventListener('mouseup', function(e) {
    	bloop = false;
    });
};

this.destroy = function() {
};

ExquisitePixel.STARTED = 1;

(function() {
})();