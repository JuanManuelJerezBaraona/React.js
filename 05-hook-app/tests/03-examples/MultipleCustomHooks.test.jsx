import { act, fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('test on <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should show the default component', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Información del Pokémon'));
        expect(screen.getByText('Anterior'));
        expect(screen.getByText('Siguiente'));
        // screen.debug();

    });

    test('should show a Pokemon', async () => {

        useFetch.mockReturnValue({
            data: {
                id: 1,
                name: 'bulbasaur',
                sprites: {
                    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
                }
            },
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        expect(screen.getByText('#1 - bulbasaur')).toBeTruthy();
        expect(screen.queryByText('Cargando...')).toBeNull();
        
        const img = screen.getByRole('img', { name: /bulbasaur/i });
        expect(img).toBeTruthy();
        expect(img.src).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png');
        // screen.debug();

    });

    test('should call the increment funcion', () => {

        useFetch.mockReturnValue({
            data: {
                id: 1,
                name: 'bulbasaur',
                sprites: {
                    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
                }
            },
            isLoading: false,
            hasError: null
        });


        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', { name: 'Siguiente' });
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalledTimes(1);

    });

});