import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokeList } from "../actions/home/pokeAction";
import { Link } from "react-router-dom";
import "../assets/styles/home.scss";
import pokeball from "../assets/img/pokeball.png";
import pikachu from "../assets/img/loading.gif";
// import ReactPaginate from "react-paginate";

const PokeList = (props) => {
  const dispatch = useDispatch();
  const pokeList = useSelector((state) => state.PokeList);

  React.useEffect(() => {
    FetchData(1);
  }, []);

  const FetchData = (page = 1) => {
    dispatch(GetPokeList(page));
  };
  // data of undefined

  const showData = () => {
    if (pokeList.loading) {
      return (
        <div className="container-loading">
          <div className="container-pikachu">
            <img src={pikachu} className="pikachu" alt="pikachu" />
          </div>
          <p className="loading-text">Loading...</p>
        </div>
      );
    }
    if (!_.isEmpty(pokeList.data)) {
      return (
        <div className="container-cards">
          {pokeList.data.map((poke) => {
            return (
              <div className="card-pokemon">
                <div className="container-img">
                  <img src={pokeball} className="img-pokeball" alt="img" />
                </div>
                <Link to={`/Home/${poke.name}`}>
                  <p className="poke-name">{poke.name.toUpperCase()}</p>
                </Link>
              </div>
            );
          })}
        </div>
      );
    }

    if (pokeList.errorMsg !== "") {
      return <p>{pokeList.errorMsg}</p>;
    }
    return <p>unable to get data</p>;
  };

  return (
    <div>
      {showData()}
      {/* {!_.isEmpty(pokeList.data) && (
        <ReactPaginate
          pageCount={Math.ceil(pokeList.count / 15)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(data) => FetchData(data.selected + 1)}
          containerClassName={"pagination"}
        />
      )} */}
    </div>
  );
};

export default PokeList;
