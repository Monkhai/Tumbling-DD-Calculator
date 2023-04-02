import { skillValuesEl, skillNamesEl, calcEl } from './selectors.js';
import { decIndex, skillIndex } from './script.js';

export default function deleteSkill() {
  if (skillIndex > 0) {
    decIndex();
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
}
