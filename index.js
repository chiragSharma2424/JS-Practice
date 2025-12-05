// set timeout 
function wrappedSetTimeout(timer) {
    setTimeout(() => {
        console.log("hello from set timeout")
    }, timer)
}

// set interval
function wrappedSetInterval(timer) {
    setInterval(() => {
        console.log("hello from set interval")
    }, timer)
}

// date methods or functions
function allDateFunctions() {
    var newDate = new Date();
    console.log(`Time is: ${newDate.toLocaleTimeString()}`)
    console.log(`Date is: ${newDate.toLocaleDateString()}`)
    console.log(`Month is ${newDate.getMonth()}`);
    console.log(`Year is ${newDate.getFullYear()}`);
    console.log(`Day is ${newDate.getDay()}`);
}

// fetch is used to send network request
function wrappedFetch() {
    fetch('https://fakestoreapi.com/products').then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(`error in sending request ${err}`);
    })
}

// custom map function
function MapImplemented(arr = []) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
}

// map function returns a new array
function wrappedMapFunction(arr = []) {
    let ans = arr.map((ele) => {
        return ele * 2
    });
    return ans;
}

// forEach used to iterate over array
function iteratingArray(arr = []) {
    let ans = arr.forEach((val) => {
        console.log(val)
    })
    return ans;
}

// filter will filter data from array
function filteringArray(arr = []) {
    let ans = arr.filter((val) => {
        if(val %2 === 0) return val
    })
    return ans;
}

function arrayOpreations(arr = [], opreation) {
    if(opreation === 'push') {
        return arr.push(24);
    } else if(opreation === 'pop') {
        return arr.pop();
    } else {
        return "Enter valid operation"
    }
}

function wrappedPush(arr = [], ele) {
    arr.push(ele)
}

function wrappedPop(arr = []) {
    arr.pop()
}

function sumOfArray(arr = []){
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum;
}

function productOfArray(arr = []) {
    var pro = 1;
    for(var i = 0; i < arr.length; i++) {
        pro = pro * arr[i]
    }
    return pro
}
