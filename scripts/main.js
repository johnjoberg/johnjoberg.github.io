const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello, Fritz!';

document.querySelector('h1').onclick = function () {
  myHeading.textContent = 'Fritz, the Frito Pie. Otherwise known as: YodaHead, Little Stink, Tiny Butt';
}

let myImage.document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAtrribute('src');
  if(mySrc === 'images/DogPark.JPG') { 
    myImage.setAtrribute('src', 'images/FritzCouch.JPG')
  } else {
  myImage.setAttribute('src', 'images/DogPark.JPG');
  }
}
