import { Sorter } from './sorter';

export class CharactersCollection extends Sorter {

    constructor(public data: string) {
        super();
    }

    get length(): number {
        return this.data.length;
    }
    
    swap(leftIndex: number, rightIndex: number): void {
        const characters = this.data.split('');
        const temp = characters[leftIndex];

        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = temp;

        this.data = characters.join('');
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }

}