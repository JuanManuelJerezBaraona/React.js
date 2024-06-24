import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


describe('test on <GifExpertApp />', () => {

    test('should render the GifExpertApp component correctly', () => {

        render(<GifExpertApp />);
        // TODO:
        expect(screen.getByText('GifExpertApp')).toBeInTheDocument();

    });

    test('should display the initial category', () => {

        render(<GifExpertApp />);
        expect(screen.getByText('dragon ball')).toBeInTheDocument();
        
    });

});