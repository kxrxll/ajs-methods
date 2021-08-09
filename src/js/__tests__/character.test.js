import Character from '../character';

test('straight test', () => {
  const testCharacter = new Character('Василий', 'Swordsman', 80, 5, 100, 70);
  const expectedCharecter = {
    attack: 100,
    defence: 70,
    health: 80,
    level: 5,
    name: 'Василий',
    type: 'Swordsman',
  };
  expect(testCharacter).toEqual(expectedCharecter);
});

test('no health test', () => {
  const testCharacter = new Character('Василий', 'Swordsman', undefined, 5, 100, 70);
  const expectedCharecter = {
    attack: 100,
    defence: 70,
    health: 100,
    level: 5,
    name: 'Василий',
    type: 'Swordsman',
  };
  expect(testCharacter).toEqual(expectedCharecter);
});

test('no level test', () => {
  const testCharacter = new Character('Василий', 'Swordsman', 80, undefined, 100, 70);
  const expectedCharecter = {
    attack: 100,
    defence: 70,
    health: 80,
    level: 1,
    name: 'Василий',
    type: 'Swordsman',
  };
  expect(testCharacter).toEqual(expectedCharecter);
});

test('short name test', () => {
  const testCharacter = () => new Character('В', 'Swordsman', 80, 5, 100, 70);
  expect(testCharacter).toThrow('Name should be a string with a length from 2 to 10 charecters');
});

test('wrong name test', () => {
  const testCharacter = () => new Character(123, 'Swordsman', 80, 5, 100, 70);
  expect(testCharacter).toThrow('Name should be a string with a length from 2 to 10 charecters');
});

test('wrong type test', () => {
  const testCharacter = () => new Character('Василий', 123, 80, 5, 100, 70);
  expect(testCharacter).toThrow('Type should be one of listed: Bowman, Swordsman, Magician, Daemon, Undead, or Zombie');
});

test('type is not listed test', () => {
  const testCharacter = () => new Character('Василий', 'Lmao', 80, 5, 100, 70);
  expect(testCharacter).toThrow('Type should be one of listed: Bowman, Swordsman, Magician, Daemon, Undead, or Zombie');
});
