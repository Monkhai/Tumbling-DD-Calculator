import { skillValuesEl, skillNamesEl } from './selectors.js';
import { decIndex, skillIndex } from './script.js';
import calculateDifficulty from './calculateDifficulty.js';

export default function deleteSkill() {
  if (skillIndex > 0) {
    decIndex();
    skillValuesEl[skillIndex].textContent = '';
    skillNamesEl[skillIndex].textContent = '';
    skillValuesEl[skillIndex].value = '0';

    calculateDifficulty();
  }
}
