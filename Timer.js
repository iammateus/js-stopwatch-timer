var Timer = function(options) {

	this.options = options;
    
    this.millisecondsCounter = 0;
    this.status = "initial";
    this.interval = null;
    
    this.buildEventListeners();
    
};

Timer.prototype.buildEventListeners = function(event) {

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

Timer.prototype.stop = function(event) {

    clearInterval(this.interval);
    this.status = "stoped";

};

Timer.prototype.start = function(event) {

    var self = this;

    if(self.status === "initial"){
        self.updateMilliseconds();
        self.interval = setInterval(self.decreaseCounter, 10, self);
        self.status = "running";
    }

    if(self.status === "stoped"){
        self.interval = setInterval(self.decreaseCounter, 10, self);
        self.status = "running";
    }

};

Timer.prototype.reset = function(event) {
    
    clearInterval(this.interval);
    self.status = "initial";
    this.millisecondsCounter = this.lastMillisecondsCounter;
    this.update();

};

Timer.prototype.updateMilliseconds = function() {
	var self = this;
	var options = self.options;

	var minutes = document.getElementById(options.minutesDisplayId).value;
	var seconds = document.getElementById(options.secondsDisplayId).value;
	var milliseconds = document.getElementById(options.millisecondsDisplayId)
        .value;
        
    var totalMilliseconds = 0;

    totalMilliseconds += parseInt(minutes) * 60000;
    totalMilliseconds += parseInt(seconds) * 1000;
    totalMilliseconds += parseInt(milliseconds);

    this.millisecondsCounter = totalMilliseconds;
    this.lastMillisecondsCounter = totalMilliseconds;
};

Timer.prototype.update = function(event) {
	var self = this;
	var options = self.options;

	var minutesDisplay = document.getElementById(options.minutesDisplayId);
	var secondsDisplay = document.getElementById(options.secondsDisplayId);
	var millisecondsDisplay = document.getElementById(
		options.millisecondsDisplayId
	);

    var minutes = Math.floor(self.millisecondsCounter / 60000);

	
	var seconds = Math.floor((self.millisecondsCounter % 60000) / 1000);
	var milliseconds = Math.floor(
		((self.millisecondsCounter % 60000) % 1000) / 10
	);

	minutesDisplay.value = minutes;
	secondsDisplay.value = seconds;
	millisecondsDisplay.value = milliseconds;
};

Timer.prototype.decreaseCounter = function(self) {
    
    if(self.millisecondsCounter <= 0){
        clearInterval(self.interval);
        self.status = "initial";
        return;
    }

    self.millisecondsCounter -= 10;
    self.update();

};
