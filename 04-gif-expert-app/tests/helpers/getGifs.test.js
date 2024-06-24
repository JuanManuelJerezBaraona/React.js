import { getGifs } from "../../src/helpers/getGifs";

describe('Test on getGifs()', () => {

    test('should return an array of Gifs', async() => {

        const gifs = await getGifs('Rick and Morty');
        // console.log(gifs);
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });

    });

});