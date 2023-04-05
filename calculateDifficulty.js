import { skillValuesEl, bonusDropdownEl, calcEl } from './selectors.js';
export default function calculateDifficulty() {
  let skillDifficulty = 0;
  skillValuesEl.forEach((skillValue) => {
    skillDifficulty += parseFloat(skillValue.value);
  });

  let bonusDifficulty = 0;
  bonusDropdownEl.forEach((dropdown) => {
    bonusDifficulty += parseFloat(dropdown.value);
  });

  let totalDifficulty = bonusDifficulty + skillDifficulty;

  if (totalDifficulty >= 0) {
    calcEl.textContent = totalDifficulty.toFixed(1);
  }
}
