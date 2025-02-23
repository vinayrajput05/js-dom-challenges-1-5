/**
 * Write your challenge solution here
 */
const nameInput = document.getElementById('nameInput');
const jobInput = document.getElementById('jobInput');
const ageInput = document.getElementById('ageInput');
const bioInput = document.getElementById('bioInput');

const nameDisplay = document.getElementById('nameDisplay');
const jobDisplay = document.getElementById('jobDisplay');
const ageDisplay = document.getElementById('ageDisplay');
const bioDisplay = document.getElementById('bioDisplay');

function updateInput(e, element) {
    element.innerText = e.target.value || 'Not provided'
}

nameInput.addEventListener('keyup', (e) => updateInput(e, nameDisplay));
jobInput.addEventListener('keyup', (e) => updateInput(e, jobDisplay));
ageInput.addEventListener('keyup', (e) => updateInput(e, ageDisplay));
bioInput.addEventListener('keyup', (e) => updateInput(e, bioDisplay));
