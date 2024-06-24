import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('test on <GifGrid />', () => {

    const category = 'Death Note';

    test('should show loading', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);
        // screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

    });

    test('should show items when images are loaded', () => {
    
        const gifs = [
            {
                id: 'ABC',
                title: 'Death Note',
                url: 'https://localhost/deathnote.jpg'
            },
            {
                id: 'DEF',
                title: 'Death Note 2',
                url: 'https://localhost/deathnote2.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);

        // screen.debug();

        expect(screen.getAllByRole('img').length).toBe(2);

    });

});