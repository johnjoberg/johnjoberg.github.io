let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/DogPark.JPG') { 
    myImage.setAttribute('src', 'images/UrbsInHorto.JPG');
  } else {
  myImage.setAttribute('src', 'images/DogPark.JPG');
  }
}
