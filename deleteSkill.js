import { skillValuesEl, skillNamesEl, calcEl, bonusDropdownEl } from './selectors.js';
import { decIndex, skillIndex } from './script.js';

export default function deleteSkill() {
  if (skillIndex > 0) {
    decIndex();
    skillValuesEl[skillIndex].textContent = '';
    skillNamesEl[skillIndex].textContent = '';
    skillValuesEl[skillIndex].value = '0';

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

    // Update the total difficulty element// .toFixed is what forces calc to show the number only with 1 digit after the decimal point
    calcEl.textContent = totalDifficulty.toFixed(1);
  }
}
