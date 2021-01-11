// Declare constants to manipulate time more easily
var YEAR_IN_SECONDS = 31536000; // 315 600 000 seconds
var DAY_IN_SECONDS = 86400; // 86 400 seconds
var HOUR_IN_SECONDS = 3600; // 3600 seconds
var MINUTE_IN_SECONDS = 60; // 60 seconds
/**
 * Recursive function to process the number
 * Counts how many years, days, hours, minutes and seconds
 * are included in the final number
 * @param option - Start options object
 * @returns Final options object
 */
var processNumber = function (options) {
    var n = options.n, str = options.str;
    if (!n) {
        return options;
    }
    if (n > YEAR_IN_SECONDS) {
        var years = Math.floor(n / YEAR_IN_SECONDS);
        var newN = n % YEAR_IN_SECONDS;
        return processNumber({
            n: newN,
            str: "" + str + str + years + " " + (years > 1 ? "years" : "year") + ","
        });
    }
    if (n > DAY_IN_SECONDS) {
        var days = Math.floor(n / DAY_IN_SECONDS);
        var newN = n % DAY_IN_SECONDS;
        return processNumber({
            n: newN,
            str: "" + str + days + " " + (days > 1 ? "days" : "day") + ","
        });
    }
    if (n > HOUR_IN_SECONDS) {
        var hours = Math.floor(n / HOUR_IN_SECONDS);
        var newN = n % HOUR_IN_SECONDS;
        return processNumber({
            n: newN,
            str: "" + str + hours + " " + (hours > 1 ? "hours" : "hour") + ","
        });
    }
    if (n > MINUTE_IN_SECONDS) {
        var minutes = Math.floor(n / MINUTE_IN_SECONDS);
        var newN = n % MINUTE_IN_SECONDS;
        return processNumber({
            n: newN,
            str: "" + str + minutes + " " + (minutes > 1 ? "minutes" : "minute") + ","
        });
    }
    return processNumber({
        n: 0,
        str: "" + str + n + " " + (n > 1 ? "seconds" : "second")
    });
};
/**
 * Parse the result from the recursive functions and add punctuation
 * @param option - Start options object
 * @returns Final string to display
 */
var addPunctuation = function (options) {
    var results = options.str.split(",");
    var resultString = "";
    results.forEach(function (result, index) {
        resultString = "" + resultString + result;
        if (results.length - index > 2) {
            resultString = resultString + ", ";
        }
        else if (results.length - index === 2) {
            resultString = resultString + " and ";
        }
        else if (results.length - index === 1) {
            resultString = resultString + ".";
        }
    });
    return resultString;
};
var formatDuration = function (n) {
    52;
    if (n < 0) {
        return "You must pass at least 0.";
    }
    if (n === 0) {
        return "now";
    }
    var finalOptions = processNumber({
        n: n,
        str: ""
    });
    return addPunctuation(finalOptions);
};
if (process.argv[2]) {
    var number = parseInt(process.argv[2], 10);
    console.log(formatDuration(number));
}
