export class Spell {
    protected name: string;
    protected damage: number;
    protected manaCost: number;

    public constructor(name: string, damage: number, manaCost: number){
        this.name = name;
        this.damage = damage;
        this.manaCost = manaCost;
    }

    getName(): string{
        return this.name
    }

    getDamage(): number{
        return this.damage
    }

    getManaCost(): number{
        return this.manaCost
    }

    setName(name: string): void{
        this.name = name
    }

    setDamage(damage: number): void{
        this.damage = damage
    }

    setManaCost(manaCost: number): void{
        this.manaCost = manaCost
    }

    showInfo(): void{
        console.log(`
        ========================
                Spell
        ========================
         Name: ${this.name}
         Damage: ${this.damage}
         Mana Cost: ${this.manaCost}
        `)
    }


}