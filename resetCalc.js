import { skillValuesEl, skillNamesEl, calcEl, bonusDropdownEl } from './selectors.js';
import { resetIndex } from './script.js';

export default function resetCalc() {
  skillValuesEl.forEach((skill) => {
    skill.textContent = '';
    skill.value = '0';
  });
  skillNamesEl.forEach((skill) => {
    skill.textContent = '';
  });

  bonusDropdownEl.forEach((dropdown) => {
    dropdown.value = 0;
  });

  resetIndex();

  let totalDifficulty = 0;

  calcEl.textContent = totalDifficulty.toFixed(1);
}
