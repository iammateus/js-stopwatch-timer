var App = function(options){
    
    this.options = options;
    this.application = null;

    this.buildEventListeners();

};

App.prototype.buildEventListeners = function () {

    var self = this;
    var select =  document.getElementById(this.options.appOptionsSelectId);

    select.addEventListener("change", function(event){
        self.createAppByChoice(event, self);
    });
    
};

App.prototype.createAppByChoice = function (event, self) {
    
    var select = event.target;
    var applicationClass = window[select.value];

    self.application = new applicationClass({
        minutesDisplayId: "minutes",
        secondsDisplayId: "secods",
        millisecondsDisplayId: "milliseconds",
        startButtonId: "start",
        stopButtonId: "stop",
        resetButtonId: "reset"
    });
    
    select.remove();

};