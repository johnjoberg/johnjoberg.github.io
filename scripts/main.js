const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello, Fritz!';

document.querySelector('h1').onclick = function () {
  myHeading.textContent = 'Fritz, the Frito Pie. Otherwise known as: YodaHead, Little Stink, Tiny Butt';
}
