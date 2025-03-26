var x,y;
x = 5;
y = 7;
let z = x + y;
console.log("z:", z); 

var A,B;
A = "Hello ";
B = "world!";
let C = A + B;
console.log("C:", C); 


function SumNPrint(x1, x2) {
    let result = x1 + x2;
    console.log("SumNPrint result:", result);
}


SumNPrint(x, y);  
SumNPrint(A, B);  

if (C.length > z){
    console.log("Conditional: ", C);
} else if (C.length < z){
    console.log("Conditional:", z);
} else {
    console.log("Conditional: good job!"); 
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(arr) {
    for (let i = 0; i<arr.length; i++){
        if (arr[i]=='Banana'){
            alert("Banana found in "+ i);
            break;
        }
    }

}

//findTheBanana(L1);
//findTheBanana(L2);

function findTheBananaForEach(arr, arrayLabel) {
    arr.forEach(function(item) {
      if (item === "Banana") {
        alert("We found a banana in the " + arrayLabel);
      }
    });
  }

//findTheBananaForEach(L1, "first array");
//findTheBananaForEach(L2, "second array");




const d = new Date();
const currentHour = d.getHours();

function greetingFunc(){
    if (currentHour < 12){
        return "Good Morning";
    } else if (currentHour >= 12 && currentHour < 18){
        return "Good Afternoon";
    } else if (currentHour >= 18 && currentHour < 20){
        return "Good Evening";
    } else {
        return "Good Night";
    }
}

student = {name:"William", age:19};

const timeElem = document.getElementById("time");
if (timeElem) {
  timeElem.innerHTML = greetingFunc() + ", " + "my name is," + student.name + "!";
}


function addYear() {
    const currentYear = new Date().getFullYear();
    const copyYearElem = document.getElementById("copyYear");
    if (copyYearElem) {
        copyYearElem.textContent = "\u00A9 " + currentYear + " William Liu. All rights reserved.";
    }
}

function showList() {
    document.getElementById("funList").style.display = "block";
    document.getElementById("showListBtn").style.display = "none";
}


$(document).ready(function() {
    $("#readMoreBtn").click(function() {
        $("#shortBio").hide();
        $("#longBio").show();
        $("#readMoreBtn").hide();
        $("#readLessBtn").show();
    });
    
    $("#readLessBtn").click(function() {
        $("#shortBio").show();
        $("#longBio").hide();
        $("#readMoreBtn").show();
        $("#readLessBtn").hide();
    });
});

function myValidation() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var commentInput = document.getElementById("comment");

    let message = "";

    if (!nameInput.checkValidity()) {
        message = "Please fill out your name";
    } else if (!emailInput.checkValidity()) {
        message = "Please fill out your Email";
    } else if (!commentInput.checkValidity()) {
        message = "Please fill out the comment section";
    } else {
        message = "Submitted";
    }

    document.getElementById("demo").innerHTML = message;

    return message === "Input OK";


}


// In static/script.js
function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
        const advice = data.slip.advice;
        document.getElementById("adviceText").innerText = advice;
      })
      .catch(error => {
        document.getElementById("adviceText").innerText = "Error fetching advice.";
        console.error("Error:", error);
      });
  }
  