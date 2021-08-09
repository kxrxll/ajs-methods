import Daemon from '../daemon';

test('daemon straight test', () => {
  const testCharacter = new Daemon('Василий');
  const expectedCharecter = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Василий',
    type: 'Daemon',
  };
  expect(testCharacter).toEqual(expectedCharecter);
});
