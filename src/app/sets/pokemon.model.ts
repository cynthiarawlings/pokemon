export class Pokemon {
    public name: string;
    public type: string;
    public url: string;

    constructor(name: string, type: string, url: string) {
        this.name = name;
        this.type = type;
        this.url = url;
    }
}