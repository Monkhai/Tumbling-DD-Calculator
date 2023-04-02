import {
  calcEl,
  skillValuesEl,
  skillButtonEl,
  skillNamesEl,
} from './selectors.js';
import { skillIndex, incIndex } from './script.js';

skillValuesEl.forEach((skillValue) => {
  skillValue.value = 0;
});

// Initialize the skill index to 0
// let skillIndex = 0;

export default function addSkill(event) {
  const button = event.target;
  // Set the text content of the current skill value span
  skillValuesEl[skillIndex].textContent = button.value;
  skillNamesEl[skillIndex].textContent = button.textContent;
  skillValuesEl[skillIndex].value = button.value;

  // Move to the next skill index
  incIndex();

  // Calculate the total difficulty
  let totalDifficulty = 0;
  skillValuesEl.forEach((skillValue) => {
    // the parseFloat converts the value of skillValue into
    totalDifficulty += parseFloat(skillValue.value);
  });

  // Update the total difficulty element// .toFixed is what forces calc to show the number only with 1 digit after the decimal point
  calcEl.textContent = totalDifficulty.toFixed(1);

  // If filled all 8 skill values, disable buttons
  if (skillIndex >= skillValuesEl.length) {
    skillButtonEl.disable = true;
  }
}
