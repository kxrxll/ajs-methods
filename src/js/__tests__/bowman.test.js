import Bowman from '../bowman';

test('bowman straight test', () => {
  const testCharacter = new Bowman('Василий');
  const expectedCharecter = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Василий',
    type: 'Bowman',
  };
  expect(testCharacter).toEqual(expectedCharecter);
});
