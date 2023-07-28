//document.getElementById("count-el").innerText=5;
/*let firstBatch=5;
let secondBatch=7;
let count=firstBatch + secondBatch;;
console.log(count);*/
/*let myAge=53;
let humanDogRatio=7;
myDogAge=myAge * humanDogRatio;
console.log(myDogAge);*/
/*let count=5;
count +=1;
console.log(count);*/
/*let bonusPoints=50;
bonusPoints +=bonusPoints;
bonusPoints -=75;
bonusPoints +=45;
console.log(bonusPoints);*/
//initilaise count as 0
// listen for clicks
//increment the count by 1
// update the value of the stored count
let count = 0;
function increment () {
    count++;
    document.getElementById("count-el").textContent=count;
    console.log(count);
}

/*logNumber(42);
function lapSum (lap1, lap2, lap3) {
    return lap1 + lap2 + lap3;
}
console.log(lapSum(34,33,36));*/
function save() {
    document.getElementById("save-btn").textContent=count;
}
function resetFunction() {
    count=0;
    document.getElementById("count-el").textContent=count;
}
/*function changeColor () {
     document.querySelector('.press-here-btn').style.color="blue";
}
//document.getElementById("count-el")."onclick"=*/
//console.log("Button was clicked");
 /* function logNumber (number) {
    console.log(number);
  }*/
/*let username ="per";
 let myMessage="You have three new notifications";
console.log(myMessage + " " + username);
let messageToUser =`${myMessage}` + " " + `${username}`;
console.log(messageToUser);*/

/*let name="Madhara";
let greeting= "Hi, my name is";
myGreeting= `${greeting}` +" " + `${name}`
console.log(myGreeting +".");*/
const previousEntries= document.getElementById("count-el");
entries=previousEntries.innerHTML;
console.log("The entries are:" + entries + count);