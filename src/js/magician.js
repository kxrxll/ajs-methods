import Character from './character';

class Magician extends Character {
  constructor(
    name,
    type = 'Magician',
    health,
    level,
    attack = 10,
    defence = 40,
  ) {
    super(name, type, health, level);
    this.attack = attack;
    this.defence = defence;
  }
}

export default Magician;
