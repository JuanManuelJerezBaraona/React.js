import { useFetch } from '../hooks';
import { useCounter } from '../hooks/useCounter';
import { LoadingCard } from './LoadingCard';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHooks = () => {
    
    const {counter, decrement, increment} = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    return (
        <>
            <h1 className='text-center'>Información del Pokémon</h1>
            <hr />

            {
                isLoading 
                ? <LoadingCard />
                : <PokemonCard 
                    id={data?.id} 
                    name={data?.name} 
                    sprites={data?.sprites.front_default} 
                />
            }

            <div className='d-flex justify-content-center mt-4'>
                <button 
                    onClick={() => counter > 1 ? decrement() : null}
                    className='btn btn-secondary shadow'
                >
                    Anterior
                </button>

                <button 
                    onClick={() => increment()}
                    className='btn btn-danger shadow'
                >
                    Siguiente
                </button>
            </div>
        </>
    )
}
