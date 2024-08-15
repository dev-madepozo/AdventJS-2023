/*
  Challenge # 06
  Title: The reindeer on trial
  Level: Easy
  Link: https://adventjs.dev/en/challenges/2023/6
*/

function maxDistance(movements) {
  let direction = movements.split('').find(item => item !== '*');

  return movements.slice(1).split('').reduce((distance, movement) => {
    if (movement === '*') return ++distance;
    return direction === movement ? ++distance : --distance;
  }, 1);
}
