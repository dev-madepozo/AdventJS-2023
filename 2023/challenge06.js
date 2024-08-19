/*
  Challenge # 06
  Title: 🦌 The reindeer on trial
  Level: Easy
  Link: https://adventjs.dev/en/challenges/2023/6
*/

function maxDistance(movements) {
  let dir = [...movements].find(item => item !== '*');

  return [...movements].reduce((distance, mov) => {
    return dir == mov || mov == '*' ? ++distance : --distance;
  }, 0);
}
