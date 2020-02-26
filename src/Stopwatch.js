var Stopwatch = function(options) {
    
    this.options = options;
    
    this.millisecondsCounter = 0;
    
    this.interval = null;
	this.buildEventListeners();

};

Stopwatch.prototype.buildEventListeners = function(event) {
    
    var self = this;

    var startButton = document.getElementById(self.options.startButtonId);
	var stopButton = document.getElementById(self.options.stopButtonId);
	var resetButton = document.getElementById(self.options.resetButtonId);

	startButton.addEventListener("click", function(event) {
		self.start();
    });
    
	stopButton.addEventListener("click", function(event) {
		self.stop();
    });
    
	resetButton.addEventListener("click", function(event) {
		self.reset();
    });
    
};

Stopwatch.prototype.start = function(event) {

	var self = this;

	self.stop();
	self.interval = setInterval(function() {
		self.millisecondsCounter += 10;
		self.update();
    }, 10);
    
};

Stopwatch.prototype.stop = function(event) {
	clearInterval(this.interval);
};

Stopwatch.prototype.reset = function(event) {
	this.millisecondsCounter = 0;
	this.stop();
	this.update();
};

Stopwatch.prototype.update = function(event) {
    
    var self = this;

	var minutesDisplay = document.getElementById(
        self.options.minutesDisplayId
    );
	var secondsDisplay = document.getElementById(
        self.options.secondsDisplayId
    );
	var millisecondsDisplay = document.getElementById(
		self.options.millisecondsDisplayId
	);

    //Gets minutes of counter
	var minutes = Math.floor(
        self.millisecondsCounter / 60000
    );

    //Gets remaining seconds of counter
	var seconds = Math.floor(
        (self.millisecondsCounter % 60000) / 1000
    );

    //Gets remaining milliseconds
	var milliseconds = Math.floor(
		((self.millisecondsCounter % 60000) % 1000) / 10
	);

	minutesDisplay.value = minutes;
	secondsDisplay.value = seconds;
    millisecondsDisplay.value = milliseconds;
    
};
