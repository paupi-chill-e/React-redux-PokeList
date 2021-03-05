const EachPokeInitialState = {
  loading: false,
  data: {},
  errorMsg: "",
  count: 0,
};

const EachPokeReducer = (state = EachPokeInitialState, action) => {
  switch (action.type) {
    case "EACH_POKEMON_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "EACH_POKEMON_SUCCESS":
      return {
        ...state,
        loading: false,
        errorMsg: "",
        data: {
          ...state.data,
          [action.pokeName]: action.payload,
        },
        count: action.payload.count,
      };
    case "EACH_POKEMON_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "unable to find pokemons",
      };

    default:
      return state;
  }
};

export default EachPokeReducer;
