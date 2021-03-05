import axios from "axios";
// All the pokemons
export const GetPokeList = () => async (dispatch) => {
  try {
    dispatch({
      type: "POKEMON_LIST_LOADING",
    });
 
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=100&offset=200`
    );

    dispatch({
      type: "POKEMON_LIST_SUCCESS",
      payload: res.data.results,
    });
  } catch (err) {
    dispatch({
      type: "POKEMON_LIST_FAIL",
    });
  }
};

// Just one pokemon
export const GetEachPoke = (pokemon) => async (dispatch) => {
  try {
    dispatch({
      type: "EACH_POKEMON_LOADING",
    });

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    dispatch({
      type: "EACH_POKEMON_SUCCESS",
      payload: res.data,
      pokeName: pokemon,
    });
  } catch (err) {
    dispatch({
      type: "EACH_POKEMON_FAIL",
    });
    console.log(err);
  }
};
