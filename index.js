//document.getElementById('count-el').innerText = 5;

//1 human year = 7 dog years
var count = 0;
var holder = [];
var test = 0;
var i = 0;
var total = document.getElementById("sum");
var b = 0;

//the function below increases the count by 1 per button click
function increment(){
    document.getElementById('count-el').innerText = count+ 1;
    count++;
    console.log(count);
    test = count;
    console.log("count is currently: " + count);
}
//the function below decrements the count by 1 per button click
function decrement(){
    document.getElementById('count-el').innerText = count- 1;
    count--;
    console.log(count);
    test = count;
    console.log("count is currently: " + count);
}
//the function below resets the count back to 0, clears all stored data, and resets text
function reset() {
    document.getElementById('count-el').innerText =0;
    document.getElementById('storage').innerText ="";
    total.innerHTML = "";
    count = 0;
    b = 0;
    holder = [];
}

//the function below generates a list of saved counts and shows the total of all values in 
//the list
function store(){
    document.getElementById('count-el').innerText =0;
    if(count < 0){
    
    document.getElementById('storage').innerText +=" (" + test + ")  -";
    }
    else{
        document.getElementById('storage').innerText +=" " + test + "  -";;
    }
    holder[i] = test;
    b += holder[i];
    i++;
    total.innerHTML = "The current sum of your stored value are: " + b;
    count = 0;
}