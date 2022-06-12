"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        // we use bubble sort
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
// Bad impletation for Sorter class, just for reference
// we should not use direct references, maybe would be better to use interface
/*
class Sorter {
    constructor(public collection: number[] | string) {}

    sort(): void {
        const { length } = this.collection;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {

                // All of this only works if collection is number[]
                // If collection is an array of numbers
                if (this.collection instanceof Array) {
                    // collection === number[]
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }

                // Only going to work if collection is a string
                // If collection is a string, do this logic instead:
                // ~~~logic to companre and swap characters in a string
                if (typeof this.collection === 'string') {
                    // collection === string
                }
            }
        }
    }
}
*/ 
