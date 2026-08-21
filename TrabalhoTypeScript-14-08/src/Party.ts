import { Character } from "./Character";

export class Party {
    protected name: string;
    protected members: Character[]

    constructor(name: string) {
        this.name = name
        this.members = []
    }

    public getName(): string {
        return this.name;
    }

    public getMembers(): Character[] {
        return this.members
    }

    public setName(name: string): void {
        this.name = name
    }

    public setMembers(members: Character[]): void {
        this.members = members
    }

    addMember(character: Character): void{
        this.members.push(character)
    }

    removeMember(character: Character): void{
        this.members = this.members.filter(member => member !== character);
        //this.members.splice(this.members.indexOf(character), 1);
    }

    showMembers(): void{
        console.log(`
        ========================
         ${this.name.toUpperCase()}
        ========================
        `)
        for (let i = 0; i < this.members.length; i++) {
            console.log(
                `${i + 1}. ${this.members[i].getName()} - Level ${this.members[i].getLevel()}`
            );
        }
    }
}