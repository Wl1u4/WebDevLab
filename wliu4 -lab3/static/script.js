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

findTheBanana(L1);
findTheBanana(L2);

function findTheBananaForEach(arr, arrayLabel) {
    arr.forEach(function(item) {
      if (item === "Banana") {
        alert("We found a banana in the " + arrayLabel);
      }
    });
  }

findTheBananaForEach(L1, "first array");
findTheBananaForEach(L2, "second array");




const d = new Date();
const currentHour = d.getHours();

function greetingFunc(){
    if (currentHour < 12){
        return "Good Morning!";
    }else if (currentHour >= 12 && currentHour < 18){
        return "Good Afternoon!";
    } else if (currentHour >= 18 && currentHour < 20){
        return "Good Evening";
    } else {
        return"Good Night";
    }

}
student = {name:"William",age:19}
document.getElementById("time").innerHTML = greetingFunc() + ", " + student.name + "! ";



