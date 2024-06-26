// get the original title of the document


// start timer when window is opened
window.onload = function(){
    startTimer();
}

// append time to existing title
function replaceTitle(additionalContent) {
    var docs = document.title
    var timer = additionalContent.toString()
    console.log(additionalContent)
    docs = docs.concat(timer)
    document.title = docs

}

// Function to start the timer
function startTimer() {
    let elapsedTime = 0;
    // Update the timer every second
    setInterval(function() {
        elapsedTime += 1;
        let formattedTime = formatTime(elapsedTime);
        replaceTitle(` - ${formattedTime}`);
    }, 1000);
}



// Function to format time as HH:MM:SS
function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return (
        (hrs > 9 ? hrs : "0" + hrs) + ":" +
        (mins > 9 ? mins : "0" + mins) + ":" +
        (secs > 9 ? secs : "0" + secs)
    );
}

