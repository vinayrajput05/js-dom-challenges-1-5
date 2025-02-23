/**
 * Write your challenge solution here
 */
const mainHeading = document.getElementById('mainHeading');

const redButton = document.getElementById('redButton');
const purpleButton = document.getElementById('purpleButton');
const greenButton = document.getElementById('greenButton');
const blueButton = document.getElementById('blueButton');
const resetButton = document.getElementById('resetButton');

redButton.addEventListener('click', function () {
  mainHeading.style.color = 'red';
});

purpleButton.addEventListener('click', function () {
  mainHeading.style.color = 'purple';
});

greenButton.addEventListener('click', function () {
  mainHeading.style.color = 'green';
});

blueButton.addEventListener('click', function () {
  mainHeading.style.color = 'blue';
});

resetButton.addEventListener('click', function () {
  mainHeading.style.color = '';
});
