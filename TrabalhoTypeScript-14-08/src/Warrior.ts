import { Character } from "./Character";
import { Weapon } from "./Weapon";

export class Warrior extends Character {

    private strength: number;
    private weapon: Weapon;

    public constructor(name: string, strength: number, weapon: Weapon) {
        super(name);
        this.strength = strength;
        this.weapon = weapon;
    }

    public getStrength(): number {
        return this.strength;
    }

    public getWeapon(): Weapon {
        return this.weapon;
    }

    public setStrength(strength: number): void {
        this.strength = strength;
    }

    public setWeapon(weapon: Weapon): void {
        this.weapon = weapon;
    }

    public attack(): void {
        console.log(`${this.name} attacks with ${this.weapon.getName()}!
                     Damage: ${this.weapon.getDamage()}
        `);
        
    }
}