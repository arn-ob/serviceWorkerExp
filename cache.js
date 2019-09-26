
/// Get Browser Data

function onGot(historyItems) {
    console.log("Hello")
    for (item of historyItems) {
        console.log(item.url);
        console.log(new Date(item.lastVisitTime));
    }
}

function helloFromCache() {
    console.log("Hello From cache")
    console.log(window.history)
}


