import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetEachPoke } from "../actions/home/pokeAction";
import { Link } from "react-router-dom";
import "../assets/styles/home.scss";
import _, { shuffle } from "lodash";
import pikachu from "../assets/img/loading.gif";

const Pokemon = (props) => {
  const pokeName = props.match.params.pokemon;

  const dispatch = useDispatch();

  const pokemonState = useSelector((state) => state.EachPokemon);

  React.useEffect(() => {
    dispatch(GetEachPoke(pokeName));
  }, []);

  const ShowData = () => {
    if (!_.isEmpty(pokemonState.data[pokeName])) {
      const pokeData = pokemonState.data[pokeName];
      return (
        <div className="container-card-pokemon">
          <div className="container-btn-back">
            <p className="btn-back">
              <Link to={"/Home"}> 🠔 Back</Link>
            </p>
          </div>
          <div className="container-all-info-pokemon">
            <div className="container-img-title-pokemon">
              <p className='pokeName'>{pokeName}</p>
              <div className="container-img-sprite">
                <img src={pokeData.sprites.front_default} alt="icon" className='img-sprite' />
              </div>
            </div>
            <div className="container-info">
              <div className="container-stats">
                <p className='title-info'>Stats</p>
                {pokeData.stats.map((item) => {
                  return (
                    <p>
                      {item.stat.name}: {item.base_stat}
                    </p>
                  );
                })}
              </div>
              <div className="container-abilities">
                <p className='title-info'>Abilities</p>
                {pokeData.abilities.map((item) => {
                  return <p>{item.ability.name}</p>;
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (pokemonState.loading) {
      return (
        <div className="container-loading">
          <div className="container-pikachu">
            <img src={pikachu} className="pikachu" alt="pikachu" />
          </div>
          <p className="loading-text">Loading...</p>
        </div>
      );
    }
    if (pokemonState.errorMsg !== "") {
      return <p>{pokemonState.errorMsg}</p>;
    }
    return <p>Error getting pokemon</p>;
  };

  return (
    <div className="container-pokemonPage">
      <div>{ShowData()}</div>
    </div>
  );
};

export default Pokemon;
