import Undead from '../undead';

test('magican straight test', () => {
  const testCharacter = new Undead('Василий');
  const expectedCharecter = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Василий',
    type: 'Undead',
  };
  expect(testCharacter).toEqual(expectedCharecter);
});
