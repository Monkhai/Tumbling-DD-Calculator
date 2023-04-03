import { calcEl, skillValuesEl, skillButtonEl, skillNamesEl, bonusDropdownEl } from './selectors.js';
import { skillIndex, incIndex } from './script.js';

skillValuesEl.forEach((skillValue) => {
  skillValue.value = 0;
});

// Initialize the skill index to 0
// let skillIndex = 0;

export default function addSkill(event) {
  const button = event.target;
  // Set the text content of the current skill value span
  skillValuesEl[skillIndex].textContent = button.value;
  skillNamesEl[skillIndex].textContent = button.textContent;
  skillValuesEl[skillIndex].value = button.value;

  // Move to the next skill index
  incIndex();

  let SkillDifficulty = 0;
  skillValuesEl.forEach((skillValue) => {
    SkillDifficulty += parseFloat(skillValue.value);
  });
  let bonusDifficulty = 0;

  bonusDropdownEl.forEach((dropdown) => {
    bonusDifficulty += parseFloat(dropdown.value);
  });
  let totalDifficulty = SkillDifficulty + bonusDifficulty;
  calcEl.textContent = totalDifficulty.toFixed(1);

  // If filled all 8 skill values, disable buttons
  if (skillIndex >= skillValuesEl.length) {
    skillButtonEl.disable = true;
  }
}
