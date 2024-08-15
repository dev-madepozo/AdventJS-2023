/*
  Challenge # 02
  Title: We start the factory
  Level: Easy
  Link: https://adventjs.dev/en/challenges/2023/2
*/

function manufacture(gifts, materials) {
  return gifts.filter(gift => {
    return gift.split('').every(letter => materials.includes(letter))
  });
}
