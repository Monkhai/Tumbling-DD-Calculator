import { calcEl, skillValuesEl, bonusDropdownEl } from './selectors.js';

export default function addBonus() {
  let SkillDifficulty = 0;
  skillValuesEl.forEach((skillValue) => {
    SkillDifficulty += parseFloat(skillValue.value);
  });

  let bonusDifficulty = 0;
  bonusDropdownEl.forEach((dropdown) => {
    bonusDifficulty += parseFloat(dropdown.value);
  });

  let totalDifficulty = SkillDifficulty + bonusDifficulty;
  if (totalDifficulty > 0) {
    calcEl.textContent = totalDifficulty.toFixed(1);
  }
}
