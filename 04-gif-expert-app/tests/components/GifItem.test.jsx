import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";


describe('Test on <GifItem />', () => {

    const title = 'Death Note';
    const url = 'https://localhost/image.jpg';

    test('should match with snapshot', () => {

        const {container} = render( <GifItem title={title} url={url} /> );
        expect(container).toMatchSnapshot();

    });

    test('should show the image with the URL and ALT from the props', () => {

        render( <GifItem title={title} url={url} /> );
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

    });

    test('should show the title in a paragraph', () => {

        render( <GifItem title={title} url={url} /> );
        expect(screen.getByText(title)).toBeTruthy();
        
    });

});