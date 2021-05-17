export class User {
    public id: number;
    public nom: string;
    public prenom: string;
    public age: number;

    constructor(id: number, nom: string, prenom: string, age: number) {
        this.age = age;
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
    }
}