import Swordsman from '../swordsman';

test('magican straight test', () => {
  const testCharacter = new Swordsman('Василий');
  const expectedCharecter = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Василий',
    type: 'Swordsman',
  };
  expect(testCharacter).toEqual(expectedCharecter);
});
