/*
  Challenge # 02
  Title: 🏭 We start the factory
  Level: Easy
  Link: https://2023.adventjs.dev/en/challenges/2023/2
*/

function manufacture(gifts, materials) {
  return gifts.filter(gift => 
    new Set([...materials, ...gift]).size === materials.length
  )
}
