import { NumbersCollection } from './numbers-collection';
import { CharactersCollection } from './characters-collection';
import { LinkedList } from './linked-list';

// Number Collection Sorting
const numbersCollection = new NumbersCollection([10, -3, 0, 5]);
numbersCollection.sort();
console.log(numbersCollection.data);

// Character Collection Sorting
const charactersCollection = new CharactersCollection('XaarrAB');
charactersCollection.sort();
console.log(charactersCollection.data);

// Linked List Sorting
const linkedList = new LinkedList();
linkedList.add(4);
linkedList.add(-10);
linkedList.add(-4);
linkedList.add(20);
linkedList.sort();
linkedList.print();