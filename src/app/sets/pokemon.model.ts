export class Pokemon {
    // public _id: string;
    public id: string;
    public name: string;
    public type: string;
    public url: string;

    constructor(id: string, name: string, type: string, url: string) {
        // this._id = _id;
        this.id = id;
        this.name = name;
        this.type = type;
        this.url = url;
    }
}