import { skillValuesEl, skillNamesEl, bonusDropdownEl } from './selectors.js';
import { resetIndex } from './script.js';
import calculateDifficulty from './calculateDifficulty.js';

export default function resetCalc() {
  skillValuesEl.forEach((skill) => {
    skill.textContent = '';
    skill.value = '0';
  });
  skillNamesEl.forEach((skill) => {
    skill.textContent = '';
  });

  bonusDropdownEl.forEach((dropdown) => {
    dropdown.value = '0.0';
  });

  resetIndex();

  calculateDifficulty();
}
