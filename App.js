var App = function(options){
    
    this.options = options;
    this.application = null;

    this.buildEventListeners();

};

App.prototype.buildEventListeners = function () {

    var self = this;
    var optionSelect =  document.getElementById(this.options.selectId);

    optionSelect.addEventListener("change", function(){      

        var applicationClass = window[this.value];

        self.application = new applicationClass(
            {
                minutesDisplayId: "minutes",
                secondsDisplayId: "secods",
                millisecondsDisplayId: "milliseconds",
                startButtonId: "start",
                stopButtonId: "stop",
                resetButtonId: "reset"
            }
        );
        
        this.remove();
        
    });
    
};