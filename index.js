function wrappedSetTimeout(timer) {
    setTimeout(() => {
        console.log("hello from set timeout")
    }, timer)
}

function wrappedSetInterval(timer) {
    setInterval(() => {
        console.log("hello from set interval")
    }, timer)
}

