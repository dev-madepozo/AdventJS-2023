/*
  Challenge # 02
  Title: We start the factory
  Level: easy
  Link: https://adventjs.dev/en/challenges/2023/2 
*/

function manufacture(gifts, materials) {
  const giftsCanBeMade = []

  gifts.forEach(gift => {
    if (gift.split('').every(letter => {
      return materials.includes(letter);
    })) {
      giftsCanBeMade.push(gift);
    }
  });

  return giftsCanBeMade;
}
