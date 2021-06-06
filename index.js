var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImage="dice"+randomNumber1+".png";
var randomImageSrc1=" "+randomImage;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImageSrc1);
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="dice"+randomNumber2+".png";
var randomImageSrc2=" "+randomImage2;
document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);

 if(randomNumber1>randomNumber2)
 {
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
 }
 else if(randomNumber2>randomNumber1)
 {
   document.querySelector("h1").innerHTML="🚩Player 2 Wins!";
 }
 else
 {
   document.querySelector("h1").innerHTML="Draw!";
 }










// var output=[];
// var i=1;
// function fizzBuzz()
// {
// while(i<=100)
// {
//      if(i%3===0 && i%5===0){
//       output.push("FizzBuzz");
//      }
//      else if(i%3===0){
//       output.push("Fizz");
//      }
//      else if(i%5===0){
//       output.push("Buzz");
//      }
//       else{
//        output.push(i);
//       }
//         i++;
// }
//
//       console.log(output);
// }
