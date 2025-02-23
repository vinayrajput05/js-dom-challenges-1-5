/**
 * Write your challenge solution here
 */
const body = document.getElementById('body');
const bulb = document.getElementById('bulb');
const toggleButton = document.getElementById('toggleButton');
const status = document.getElementById('status');

toggleButton.addEventListener('click', function () {
  bulb.classList.toggle('off');
  const isOff = bulb.classList.contains('off');
  if (isOff) {
    body.classList.add('dark-mode');
    toggleButton.textContent = 'Turn On';
  } else {
    body.classList.remove('dark-mode');
    toggleButton.textContent = 'Turn Off';
  }
});
