"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
class Character {
    name;
    level;
    health;
    constructor(name) {
        this.name = name;
        this.level = 1;
        this.health = 180;
    }
    getName() {
        return this.name;
    }
    getLevel() {
        return this.level;
    }
    getHealth() {
        return this.health;
    }
    setName(name) {
        this.name = name;
    }
    setLevel(level) {
        this.level = level;
    }
    setHealth(health) {
        this.health = health;
    }
    showInfo() {
        console.log(`
        ========================
            Character
        ========================
         Name: ${this.name}
         Level: ${this.level}
         Health: ${this.health}
        `);
    }
    takeDatakeDamage(amount) {
        if (amount < this.health) {
            this.health -= amount;
        }
        else {
            this.health = 0;
            console.log(`${this.name} Died, Health ${this.health}`);
        }
    }
}
exports.Character = Character;
