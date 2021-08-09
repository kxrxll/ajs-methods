import Zombie from '../zombie';

test('magican straight test', () => {
  const testCharacter = new Zombie('Василий');
  const expectedCharecter = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Василий',
    type: 'Zombie',
  };
  expect(testCharacter).toEqual(expectedCharecter);
});
