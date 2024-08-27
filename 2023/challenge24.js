/*
  Challenge # 24
  Title: 🪜 Jump on the stairs
  Level: Medium
  Link: https://adventjs.dev/en/challenges/2023/24
*/

function getStaircasePaths(steps, maxJump) {
  const staircasePaths = []
  const findPaths = (currentPath, steps) => {
    if (steps === 0) {
      staircasePaths[staircasePaths.length] = currentPath
      return 
    }

    for (let i = 1; i <= Math.min(maxJump, steps); i++) {
      findPaths([...currentPath, i], steps - i)
    }
  }

  findPaths([], steps)
  return staircasePaths
}
