import { Character } from "./Character";
import { Weapon } from "./Weapon";

export class Warrior extends Character{
    protected strength: number;
    protected weapons: Weapon[]

    public constructor(name: string, strength: number){
        super(name)
        this.strength = strength
        this.weapons = []
    }

    getName(): string{
        return this.name
    }

    getStrength(): number{
        return this.strength
    }

    setName(name: string): void{
        this.name = name
    }

    setStrength(strength: number): void{
        this.strength = strength
    }

    attack(): void{
        console.log(`
        ${this.name} attacks with Longsword!
        Damage: ${this.strength}
        `)
    }


}