"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mage = void 0;
const Character_1 = require("./Character");
class Mage extends Character_1.Character {
    mana;
    spell;
    constructor(name, mana, spell) {
        super(name);
        this.mana = mana;
        this.spell = spell;
    }
    getMana() {
        return this.mana;
    }
    getSpell() {
        return this.spell;
    }
    setMana(mana) {
        this.mana = mana;
    }
    setSpell(spell) {
        this.spell = spell;
    }
    castSpell() {
        if (this.mana >= this.spell.getManaCost()) {
            console.log(`${this.getName()} casts ${this.getSpell()}`);
            console.log(`Damage: ${this.spell.getDamage()}`);
            this.mana -= this.spell.getManaCost();
            console.log(`Mana remaining: ${this.mana}`);
        }
    }
}
exports.Mage = Mage;
