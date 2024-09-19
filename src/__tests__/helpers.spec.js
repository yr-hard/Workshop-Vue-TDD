import { describe, expect, test } from "vitest";
import { sum, increment } from "../helpers";

describe("sum function", () => {
    test("add 2 numbers", () => {
        expect(sum(1, 2)).toBe(3);
    });

});

describe("increment function", () => {
    test("increment by 1 number", () => {
        expect(increment(1, 3)).toBe(2);
    });
    test("increment not running when current is same or greater than max", () => {
        expect(increment(10)).toBe(10);
        expect(increment(10, 10)).toBe(10);
        expect(increment(11, 10)).toBe(11);
    });
    test("has default value for max = 10", () => {
        expect(increment(1)).toBe(2);
    } );

});


