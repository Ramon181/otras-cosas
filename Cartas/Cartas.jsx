"use client";

import axios from "axios";
import { Carta } from "../Cart/Carta";
import style from "./Cartas.module.css";
import { useEffect, useState } from "react";
import { Pagination } from "../Pagination/Pagination";
import Personaje from "../Personaje/Personaje";

export const Cartas = () => {
  const [personajes, setPersonajes] = useState([]);
  const [description, setDescription] = useState(false);
  const [characterId, setCharacterId] = useState(0)

  const [currentPage, setCurrentPage] = useState(1); // Setea la Pagina Actual
  const itemsPerPage = 4;

  const allPersonajes = async () => {
    const res = await axios.get(
      "https://gateway.marvel.com/v1/public/characters?limit=20&ts=1&apikey=957a572378f86fab746778984884581f&hash=24c043ba4094f21173bc246ee7f8b067"
    );

    setPersonajes(res.data.data.results);
  };

  useEffect(() => {
    allPersonajes();
  }, []);

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = personajes.slice(startIndex, endIndex);

  const numeroPaginas = Math.ceil(personajes.length / itemsPerPage);

  return (
    <div className={style.cartas_main}>
      <div className={style.cartas_body}>
        {itemsToShow.map(personaje => (
          <Carta
            key={personaje.id}
            id={personaje.id}
            name={personaje.name}
            img={personaje.thumbnail.path + "." + personaje.thumbnail.extension}
            comics={personaje.comics.available}
            series={personaje.series.available}
            setCharacterId={setCharacterId}
            setDescription={setDescription}
          />
        ))}
      </div>
      {description === true ? <Personaje characterId={characterId} setDescription={setDescription} /> : null}
      <Pagination
        itemsPerPage={itemsPerPage}
        numeroPaginas={numeroPaginas}
        currentPage={currentPage}
        totalPages={personajes.length}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};
