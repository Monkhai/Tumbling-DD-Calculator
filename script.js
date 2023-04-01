import addSkill from './addSkill.js';
import { skillButtonEl } from './selectors.js';
import { deleteBtnEl } from './selectors.js';
import { calcEl } from './selectors.js';
import { resetBtnEl } from './selectors.js';
import { skillValuesEl } from './selectors.js';
// This sets the value of each skillValue element to 0. This allows the total difficulty to calculate difficulty of not finished passes.
skillValuesEl.forEach((skillValue) => {
  skillValue.value = 0;
});

// Initialize the skill index to 0
let skillIndex = 0;

// Add a click event listener to each button
skillButtonEl.forEach((button) => {
  button.addEventListener('click', addSkill());
});

deleteBtnEl.addEventListener('click', function () {
  if (skillIndex > 0) {
    skillIndex--;
    skillValuesEl[skillIndex].textContent = '';
    skillNamesEl[skillIndex].textContent = '';
    skillValuesEl[skillIndex].value = '0';

    let totalDifficulty = 0;
    skillValuesEl.forEach((skillValue) => {
      // the parseFloat converts the value of skillValue into
      totalDifficulty += parseFloat(skillValue.value);
    });

    // Update the total difficulty element// .toFixed is what forces calc to show the number only with 1 digit after the decimal point
    calcEl.textContent = totalDifficulty.toFixed(1);
  }
});

resetBtnEl.addEventListener('click', function () {
  skillValuesEl.forEach((skill) => {
    skill.textContent = '';
    skill.value = '0';
  });
  skillNamesEl.forEach((skill) => {
    skill.textContent = '';
  });

  skillIndex = 0;

  let totalDifficulty = 0;
  skillValuesEl.forEach((skillValue) => {
    // the parseFloat converts the value of skillValue into
    totalDifficulty += parseFloat(skillValue.value);
  });

  // Update the total difficulty element// .toFixed is what forces calc to show the number only with 1 digit after the decimal point
  calcEl.textContent = totalDifficulty.toFixed(1);
});
