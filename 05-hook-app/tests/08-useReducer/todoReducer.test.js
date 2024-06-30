import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('test on todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }]

    test('should return the default state', () => {

        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);

    });

    test('should add a todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'New Todo',
                done: false
            }
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);

    });

    test('should remove a todo', () => {

        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
        expect(newState).toEqual([]);

    });

    test('should toggle a todo', () => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };

        const newState = todoReducer(initialState, action);
        expect(newState).toEqual([{
            id: 1,
            description: 'Demo Todo',
            done: true
        }]);

    });

});