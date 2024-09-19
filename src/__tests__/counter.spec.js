// counter.spec.js
import { useCounter } from '../counter';
import { describe, expect, test, beforeEach } from 'vitest';

describe('Counter', () => {
    const { count, increment, reset } = useCounter();

    beforeEach(() => {
        reset();
    });

    test('count should be 0', () => {
        expect(count.value).toBe(0);
    });

    test('increment count', () => {
        increment();
        expect(count.value).toBe(1);
    });

    test('reset count', () => {
        increment();
        reset();
        expect(count.value).toBe(0);
    });
});