/**
 * define plugin name
 * set default options and set rules
 * catch mark from element data attribute 
 * initialize the result object
 * 
 * check the given mark is 'greater then or equal' from passmark
 * match the mark to the given settings
 * 
 * set the result into dom
 * set the success method and send the result object as param
 */

(function($) {
    // define plugin name
    $.fn.countdown = function(options) {
        // set the user options
        var settings = $.extend({
            datetime: null,
            success: null
        }, options);

        // return this for method chaining 
        return this.each(function() {
            if(settings.datetime != null) {
                var $this = $(this),
                    record = {};

                // convart the given date-time to millisecond
                var given = new Date(settings.datetime).getTime();

                // update the calculation every 1000 millisecond
                var interval = setInterval(function() {
                    var output = '';

                    // get current date and time in millisecond
                    var now = new Date().getTime();

                    // difference between current and the given date-time
                    var difference = given - now;

                    // calculate time for days, hours, minutes and seconds
                    record = {
                        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                        seconds: Math.floor((difference % (1000 * 60)) / 1000)
                    };

                    // set output dom
                    output += '<span class="days">' + record.days + '<span> days </span></span>';
                    output += '<span class="hours">' + record.hours + '<span> hours </span></span>';
                    output += '<span class="minutes">' + record.minutes + '<span> minutes </span></span>';
                    output += '<span class="seconds">' + record.seconds + '<span> seconds </span></span>';

                    $this.html(output);

                    // if the countdown is over, write some text 
                    if (difference < 0) {
                        clearInterval(interval);
                        $this.html('<strong>Expired!</strong>');
                    }

                    // call the success method
                    if($.isFunction(settings.success)) {
                        settings.success.call(this, record);
                    }
                }, 1000);
            }

            console.log("Coderill ...");
        });
    }
}(jQuery));





















