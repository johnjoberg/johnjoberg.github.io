let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/DogPark.JPG') { 
    myImage.setAttribute('src', 'images/UrbsInHorto.JPG');
  } else {
  myImage.setAttribute('src', 'images/DogPark.JPG');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Fritz is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName(); 
  } else {
  let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Fritz is cool,' + storedName;
   }

myButton.onclick = function() {
  setUserName();
}
