import {combineReducers} from 'redux';
import PokemonListReducer from './home/pokeListReducer';
import EachPokeReducer from './home/eachPokeReducer';

const RootReducer = combineReducers({
    PokeList: PokemonListReducer,
    EachPokemon : EachPokeReducer
});

export default RootReducer;