import Magician from '../magician';

test('magican straight test', () => {
  const testCharacter = new Magician('Василий');
  const expectedCharecter = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Василий',
    type: 'Magician',
  };
  expect(testCharacter).toEqual(expectedCharecter);
});
