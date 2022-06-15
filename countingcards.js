let count = 0;

function cc(card) {
  if ([2, 3, 4, 5, 6].includes(card)) count += 1
  if ([10, 'J', 'Q', 'K', 'A'].includes(card)) count -= 1
  return `${count} ${count > 0 ? 'Bet' : 'Hold'}`
}

cc(2); cc(3); cc(7); cc('K'); cc('A');