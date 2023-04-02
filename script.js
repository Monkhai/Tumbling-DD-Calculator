import addSkill from './addSkill.js';
import { skillButtonEl } from './selectors.js';
import { deleteBtnEl } from './selectors.js';
import { resetBtnEl } from './selectors.js';
import { skillValuesEl } from './selectors.js';
import deleteSkill from './deleteSkill.js';
import resetCalc from './resetCalc.js';
// This sets the value of each skillValue element to 0. This allows the total difficulty to calculate difficulty of not finished passes.
skillValuesEl.forEach((skillValue) => {
  skillValue.value = 0;
});

// Initialize the skill index to 0
let skillIndex = 0;

// Add a skill
skillButtonEl.forEach((button) => {
  button.addEventListener('click', addSkill);
});

//delete skill
deleteBtnEl.addEventListener('click', deleteSkill);

//reset skill
resetBtnEl.addEventListener('click', resetCalc);
