import { Weapon } from "./Weapon";
import { Spell } from "./Spell";
import { Mage } from "./Mage";
import { Warrior } from "./Warrior";
import { Party } from "./Party";

function line(): void{
    console.log(`
=====================================================================`)
}

let weapon1: Weapon = new Weapon('Espada Matadoraaaa', 35);
let weapon2: Weapon = new Weapon('Granada assasina', 43);

let spell1: Spell = new Spell('Estacas de geloooo', 37, 28);
let spell2: Spell = new Spell('Bola de fogoooo', 41, 35);

let warrior1: Warrior = new Warrior('Crimson Knight', 100, weapon1);
let warrior2: Warrior = new Warrior('Superior warrior', 150, weapon2);

let mage1: Mage = new Mage('Ice Queen', 180, spell1);
let mage2: Mage = new Mage('Skull Lord', 150, spell2);


let party1: Party = new Party('Explosive snap-pops');

party1.addMember(warrior1);
party1.addMember(warrior2);
party1.addMember(mage1);
party1.addMember(mage2);

line();
party1.showMembers();
line();
warrior1.showInfo();
line();
warrior2.showInfo();
line();
mage1.showInfo();
line();
mage2.showInfo();
line();

warrior1.attack();
line();
warrior2.attack();
line();
mage1.castSpell();
line();
mage2.castSpell();
line();

mage2.castSpell();
mage2.castSpell();
mage2.castSpell();
mage2.castSpell();

line();
warrior1.showInfo();
line();
warrior1.takeDatakeDamage(200);
line();

party1.removeMember(warrior1);
party1.showMembers();
line();