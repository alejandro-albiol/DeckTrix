export class Card{

    #suit!:string;
    #value!:string;

    constructor(suit:string, value:string){
        this.#suit = suit;
        this.#value = value;
    }

    get suit():string{
        return this.#suit;
    }

    get value():string{
        return this.#value
    }
}