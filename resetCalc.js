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
    dropdown.value = '0.0';
  });

  resetIndex();

  let skillDifficulty = 0;
  skillValuesEl.forEach((skillValue) => {
    skillDifficulty += parseFloat(skillValue.value);
  });

  let bonusDifficulty = 0;
  bonusDropdownEl.forEach((dropdown) => {
    bonusDifficulty += parseFloat(dropdown.value);
  });

  let totalDifficulty = bonusDifficulty + skillDifficulty;

  calcEl.textContent = totalDifficulty.toFixed(1);
}
