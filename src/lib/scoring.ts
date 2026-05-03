/**
 * Implements the specific scoring logic for multiple-choice questions.
 * C = number of correct options selected by the user
 * W = number of incorrect options selected by the user
 * T = total number of correct options in the question
 */
export function calculateQuestionScore(userSelected: string[], correctValues: string[]): number {
  const T = correctValues.length;
  const selectedCorrect = userSelected.filter(val => correctValues.includes(val));
  const selectedIncorrect = userSelected.filter(val => !correctValues.includes(val));
  
  const C = selectedCorrect.length;
  const W = selectedIncorrect.length;

  if (T === 0) return 0;

  let base = 0;
  let penalty = 0;

  // 2. Base score (before penalties)
  if (T >= 4) {
    if (C === 1) base = 0.2;
    else if (C === 2) base = 0.4;
    else if (C === 3) base = 0.6;
    else if (C === 4) base = 1;
  } else if (T === 3) {
    if (C === 3) base = 1;
    else if (C === 2) base = 0.5;
    else if (C === 1) base = 0.25;
  } else if (T === 2) {
    if (C === 2) base = 1;
    else if (C === 1) base = 0.4;
  } else if (T === 1) {
    if (C === 1) base = 1;
  }

  // 3. Penalties for incorrect options
  if (T >= 1) {
    penalty = 0.5 * W;
  }

  // 4. Final score computation
  const finalScore = Math.max(0, base - penalty);
  
  return finalScore;
}
