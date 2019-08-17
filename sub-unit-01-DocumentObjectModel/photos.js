/*    Exercise 01_05_01

 *    Photo gallery
 *    Variables and functions
 *    Author: Jacob Gordon
 *    Date:   08/14/19

 *    Filename: photos.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrder = [1,2,3,4,5];
var figureCount = 5;

function populateFigures(){
   var fileName;
   var currentFig;
   if(figureCount===5){
   for (var i = 1; i < 4; i++) {
fileName = "images/IMG_0"+ photoOrder[i]+"sm.jpg";
currentFig=document.getElementsByTagName("img")[i-1];
currentFig.src=fileName;
   }
}else{
   for(var i=0;i<5;i++){
fileName="images/IMG_0"+photoOrder+"sm.jpg";
currentFig = document.getElementsByTagName("img")[i];
currentFig.src = fileName;
   }
}
}

/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] + 1) === 6) {
         photoOrder[i] = 1;
      } else {
         photoOrder[i] += 1;
      }
      populateFigures();
   }
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] - 1) === 0) {
         photoOrder[i] = 5;
      } else {
         photoOrder[i] -= 1;
      }
      populateFigures();
   }
}

function previewFive(){
var lastFigure = document.createElement("figure");
lastFigure.id="fig5";
lastFigure.style.zindex="5";
lastFigure.style.position="absolute";
lastFigure.style.right="45px"
lastFigure.style.top="67px"

var lastImage = document.createElement("img");
lastImage.width = "240";
lastImage.height = "135";

var articleElem = document.getElementsByTagName("article")[0];
lastFigure.appendChild(lastImage);
//articleElem.appendChild(lastFigure);
articleElem.insertBefore(lastFigure, document.getElementById("rightarrow"));

var firstFigure = lastFigure.cloneNode(true);
firstFigure.id="fig1";
firstFigure.style.right="";
firstFigure.style.last = "45px";
//articleElem.appendChild(firstFigure);
articleElem.insertBefore(firstFigure, document.getElementById("fig2"));

document.getElementsByTagName("img")[3].src="images/IMG_0"+photoOrder[4]+"sm.jpg";
document.getElementsByTagName("img")[4].src="images/IMG_0"+photoOrder[0]+"sm.jpg";

}

/* open center figure in separate window */
function zoomFig() {
}

function createEventListeners(){
   //Adds functionality for the left arrow
   var leftArrow=document.getElementById("leftarrow");
   if(leftArrow.addEventListener){
      leftArrow.addEventListener("click",leftArrow,false);
   }else if(leftArrow.attachEvent){
leftArrow.attachEvent("onclick", leftArrow)
   }
   //Adds functionality for the right arrow
   var rightArrow=document.getElementById("rightarrow");
   if(rightArrow.addEventListener){
      rightArrow.addEventListener("click",rightArrow,false);
   }else if(rightArrow.attachEvent){
rightArrow.attachEvent("onclick", rightArrow)

var mainFig=document.getElementsByTagName("img")[1];
if(mainFig.addEventListener){
   mainFig.addEventListener("click",zoomFig,false);
}else if(mainFig.attachEvent){
   mainFig.attachEvent("onclick", zoomFig);
}
   }

   var showAllButton = document.querySelector("#fiveButton p");
   if(showAllButton.addEventListener){
showAllButton.addEventListener("click", previewFive, false)
   }
   else if(showAllButton.attachEvent){
showAllButton.attachEvent("onclick", previewFive);
   }
}
/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}