import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../useCounter"


describe('Test on useCounter', () => {

    test('should return default values', () => {

        const { result } = renderHook(() => useCounter());
        // console.log(result);
        const { counter, increment, decrement, reset } = result.current;

        expect(counter).toBe(10);
        expect(increment).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));

    });

    test('should generate the counter with the value 100', () => {

        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;

        expect(counter).toBe(100);

    });

    test('should increment the counter', () => {

        const { result } = renderHook(() => useCounter());
        const { counter, increment } = result.current;

        act(() => {
            increment();
        });

        expect(result.current.counter).toBe(11);

    });

});