import { skillValuesEl, skillButtonEl, skillNamesEl } from './selectors.js';
import { skillIndex, incIndex } from './script.js';
import calculateDifficulty from './calculateDifficulty.js';

export default function addSkill(event) {
  const button = event.target;
  if (skillIndex > 7) {
    skillButtonEl.disabled = true;
  } else {
    // Set the text content of the current skill value span
    skillValuesEl[skillIndex].textContent = button.value;
    skillNamesEl[skillIndex].textContent = button.textContent;
    skillValuesEl[skillIndex].value = button.value;

    // Move to the next skill index
    incIndex();
  }

  calculateDifficulty();

  // If filled all 8 skill values, disable buttons
}
