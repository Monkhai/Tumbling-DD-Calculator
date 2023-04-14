import addSkill from './addSkill.js';
import deleteSkill from './deleteSkill.js';
import resetCalc from './resetCalc.js';
import {
  skillButtonEl,
  deleteBtnEl,
  resetBtnEl,
  skillValuesEl,
  bonusDropdownEl,
} from './selectors.js';
import calculateDifficulty from './calculateDifficulty.js';

skillValuesEl.forEach((skillValue) => {
  skillValue.value = 0;
});

// Initialize the skill index to 0
let skillIndex = 0;
export function resetIndex() {
  skillIndex = 0;
}
export function incIndex() {
  skillIndex++;
}

export function decIndex() {
  skillIndex--;
}

// Add a skill
skillButtonEl.forEach((button) => {
  button.addEventListener('click', addSkill);
});

bonusDropdownEl.forEach((dropdown) => {
  dropdown.addEventListener('change', calculateDifficulty);
});

//delete skill
deleteBtnEl.addEventListener('click', deleteSkill);

//reset skill
resetBtnEl.addEventListener('click', resetCalc);
