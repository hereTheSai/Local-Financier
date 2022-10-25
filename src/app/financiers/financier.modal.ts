export class Financier {
    public name : string;
    public id : number;
    public imageUrl : string;
    public rating : number;

    constructor(name: string, id: number, imageUrl: string, rating:number) {
        this.name = name;
        this.id = id;
        this.imageUrl = imageUrl;
        this.rating = rating;
    }
}