import addSkill from './addSkill.js';
import deleteSkill from './deleteSkill.js';
import resetCalc from './resetCalc.js';
import {
  skillButtonEl,
  deleteBtnEl,
  resetBtnEl,
  skillValuesEl,
} from './selectors.js';
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
