import React from 'react';
import PokeList from '../../containers/pokeList';

export const Home = () => {
    return (
        <div className='container-pokelist'>
            <p className='title-home'>Welcome to PokeList</p>
            <p className='parragraph-home'>Select the pokemon you want to look </p>
            <PokeList/>
        </div>
    )
}
export default Home;
