export class Character {
    id: number;
    name: string;
    ac: number;
    hp: number;
    mp: number;
    perception: number;


    constructor(id: number, name: string, ac: number, hp: number, mp: number, perception: number) {
        this.id = id;
        this.name = name;
        this.ac = ac;
        this.hp = hp;
        this.mp = mp;
        this.perception = perception;
    }
}

export class Turn {
    characters: Character[];
    lastId = 0;

    constructor() {
        this.characters = [];
    }

    newChar(name: string, ac: number, hp: number, mp: number, perception: number): Character {
        this.lastId++;
        const character: Character = new Character(this.lastId, name, ac, hp, mp, perception);
        this.characters.push(character);
        return character;
    }   
}