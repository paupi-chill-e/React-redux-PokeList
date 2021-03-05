const PokeInitialState = {
  loading: false,
  data: [],
  errorMsg: "",
  count: 0, 
};

const PokemonListReducer = (state = PokeInitialState, action) => {
  switch (action.type) {
    case "POKEMON_LIST_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "POKEMON_LIST_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "no se pudo traer",
      };
    case "POKEMON_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMsg: "",
      };
    default:
      return state;
  }
};
export default PokemonListReducer;
