import { Character } from "./Character";
import { Spell } from "./Spell";

export class Mage extends Character {
    protected mana: number;
    protected spell: Spell;

    public constructor(name: string, mana: number, spell: Spell){
        super(name);
        this.mana = mana;
        this.spell = spell;
    }


    public getMana(): number{
        return this.mana
    }

    public getSpell(): Spell{
        return this.spell
    }

    public setMana(mana: number): void{
        this.mana = mana
    }

    public setSpell(spell: Spell): void{
        this.spell = spell
    }
    
    castSpell(): void{
        if(this.mana >= this.spell.getManaCost()){
            console.log(`${this.getName()} casts ${this.spell.getName()!!}`)
            console.log(`Damage: ${this.spell.getDamage()}`);
            this.mana -= this.spell.getManaCost();
            console.log(`Mana remaining: ${this.mana}`);
        }
    }
}