import Character from './character';

class Zombie extends Character {
  constructor(
    name,
    type = 'Zombie',
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

export default Zombie;
