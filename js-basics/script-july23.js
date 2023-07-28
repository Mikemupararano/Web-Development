/*document.write("Hello Mhike Madhara!");
document.write("Rushinga is a district in Mashonaland Central");
//document.write(typeof(6));
//console.log(20*3);

let x=8;
if(x<10){
document.write("The value of x is less than 10.");
}
else if (x==8){
    document.write(("The value of x is equal to 8."));
}
else {
    document.write("The value of x is greater than 10.");
}*/
/*let x=20;
if(x% 2==0){
    document.write("This is an even number.");

}
else {
document.write("This is an odd number.");
}*/
/*let x=21;
if (x%2==0 && x>0) {
document.write("The number is even and is greater than zero.");
}
else if (x%2!=0 && x>0) {
    document.write("The number is odd and is greater than zero.");
}
else if (x<0 && x%2==0) {
     document.write("The number is negative and is even.");
}
    
else {
    document.write("The number is negative and is odd");
}

console.log(x%2!=0);*/
/*const intValue=parseFloat(prompt("Eneter the month of the year:"));
console.log(typeof(intValue));
switch (intValue) {
    case 1:
        document.write("The month is: January.");
                break;
    case 2: 
    document.write("The month is: February.");
    case 3:
        document.write("The month is: March.");
        break;
    case 4:
        document.write("The month is: April.");
            break;
    case 5:
        document.write("The month is: May.");
        break;
    case 6:
        document.write("The month is: June.");
        break;
    case 7:
        document.write("The month is: July.");
        break;
    case 8:
        document.write("The month is: August.");
            break;
    case 9:
        document.write("The month is: September.");
                break;
    case 10:
            document.write("The month is: October.");
                    break;
    case 11:
        document.write("The month is: November.");
                        break;
    case 12:
        document.write("The month is: December.");
                        break;
    default:
        document.write("Wrong input");
}*/
//document.getElementById("parag").innerHTML=prompt("Enter youname") + "," + "  " + "Rushinga is a district near Mt Darwin.";
function myFunction() {
    num1=parseFloat(document.getElementById("num1").value);
num2=parseFloat(document.getElementById("num2").value);
document.getElementById("output").innerHTML=(num1 +num2).toFixed(1);

   }


