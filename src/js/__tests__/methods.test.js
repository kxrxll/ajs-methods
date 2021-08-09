import Character from '../character';

test('straight levelUp test', () => {
  const testCharacter = new Character('Василий', 'Swordsman', 80, 5, 100, 100);
  testCharacter.levelUp();
  const expectedCharecter = {
    attack: 120,
    defence: 120,
    health: 100,
    level: 6,
    name: 'Василий',
    type: 'Swordsman',
  };
  expect(testCharacter).toEqual(expectedCharecter);
});

test('dead levelUp test', () => {
  const testCase = () => {
    const testCharacter = new Character('Василий', 'Swordsman', 10, 5, 100, 0);
    testCharacter.damage(10);
    testCharacter.levelUp();
  };
  expect(testCase).toThrow('Dead can not level up');
});

test('straight damage test', () => {
  const testCharacter = new Character('Василий', 'Swordsman', 80, 5, 100, 50);
  testCharacter.damage(40);
  const expectedCharecter = {
    attack: 100,
    defence: 50,
    health: 60,
    level: 5,
    name: 'Василий',
    type: 'Swordsman',
  };
  expect(testCharacter).toEqual(expectedCharecter);
});

test('dead damage test', () => {
  const testCharacter = new Character('Василий', 'Swordsman', 10, 5, 100, 0);
  testCharacter.damage(11);
  testCharacter.damage(100);
  const expectedCharecter = {
    attack: 100,
    defence: 0,
    health: -1,
    level: 5,
    name: 'Василий',
    type: 'Swordsman',
  };
  expect(testCharacter).toEqual(expectedCharecter);
});
