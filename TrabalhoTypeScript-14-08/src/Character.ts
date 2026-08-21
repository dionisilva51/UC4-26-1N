export class Character {
    protected name: string;
    protected level: number;
    protected health: number;

    public constructor(name: string) {
        this.name = name;
        this.level = 1;
        this.health = 180;
    }

    public getName(): string {
        return this.name;
    }

    public getLevel(): number {
        return this.level
    }

    public getHealth(): number {
        return this.health
    }

    public setName(name: string): void {
        this.name = name
    }

    public setLevel(level: number): void {
        this.level = level
    }

    public setHealth(health: number): void {
        this.health = health
    }

    showInfo(): void {
        console.log(`
        ========================
            Character
        ========================
         Name: ${this.name}
         Level: ${this.level}
         Health: ${this.health}
        `)
    }



    public takeDatakeDamage(amount: number): void {
        if (amount < this.health) {
            this.health -= amount;
            console.log(`
                        ${this.name} was attacked...
                        Remaining life: ${this.health}`);
        } else {
            this.health = 0
            console.log(`${this.name} Died, Health ${this.health}`);
        }
    }
}