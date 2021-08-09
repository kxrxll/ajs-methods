import Character from './character';

class Swordsman extends Character {
  constructor(
    name,
    type = 'Swordsman',
    health,
    level,
    attack = 40,
    defence = 10,
  ) {
    super(name, type, health, level);
    this.attack = attack;
    this.defence = defence;
  }
}

export default Swordsman;
