import { skillValuesEl, skillNamesEl, calcEl } from './selectors.js';
import { resetIndex } from './script.js';

export default function resetCalc() {
  skillValuesEl.forEach((skill) => {
    skill.textContent = '';
    skill.value = '0';
  });
  skillNamesEl.forEach((skill) => {
    skill.textContent = '';
  });

  resetIndex();

  let totalDifficulty = 0;
  skillValuesEl.forEach((skillValue) => {
    // the parseFloat converts the value of skillValue into
    totalDifficulty += parseFloat(skillValue.value);
  });

  // Update the total difficulty element// .toFixed is what forces calc to show the number only with 1 digit after the decimal point
  calcEl.textContent = totalDifficulty.toFixed(1);
}
