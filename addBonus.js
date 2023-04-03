import { calcEl, skillValuesEl, bonusDropdownEl } from './selectors.js';

export default function addBonus(event) {
  const dropdown = event.target;
  console.log(dropdown.value);

  let SkillDifficulty = 0;
  skillValuesEl.forEach((skillValue) => {
    SkillDifficulty += parseFloat(skillValue.value);
  });
  let bonusDifficulty = 0;

  bonusDropdownEl.forEach((dropdown) => {
    bonusDifficulty += parseFloat(dropdown.value);
  });
  let totalDifficulty = SkillDifficulty + bonusDifficulty;
  console.log(totalDifficulty);
  calcEl.textContent = totalDifficulty.toFixed(1);
}
