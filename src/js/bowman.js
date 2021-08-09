import Character from './character';

class Bowman extends Character {
  constructor(
    name,
    type = 'Bowman',
    health,
    level,
    attack = 25,
    defence = 25,
  ) {
    super(name, type, health, level);
    this.attack = attack;
    this.defence = defence;
  }
}

export default Bowman;
