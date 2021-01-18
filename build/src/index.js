"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sorter_1 = require("./sorter");
var numbers_collection_1 = require("./numbers-collection");
var characters_collection_1 = require("./characters-collection");
var linked_list_1 = require("./linked-list");
var sorter;
// Number Collection Sorting
var numbersCollection = new numbers_collection_1.NumbersCollection([10, -3, 0, 5]);
sorter = new sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
// Character Collection Sorting
var charactersCollection = new characters_collection_1.CharactersCollection('XaarrAB');
sorter = new sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
// Linked List Sorting
var linkedList = new linked_list_1.LinkedList();
linkedList.add(4);
linkedList.add(-10);
linkedList.add(-4);
linkedList.add(20);
sorter = new sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
