"use client";

import axios from "axios";
import style from "./Personaje.module.css";
import { useEffect, useState } from "react";

const Personaje = ({ characterId, setDescription }) => {
  const [character, setCharacter] = useState([]);

  const descripcionId = async () => {
    const res = await axios.get(
      `https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=957a572378f86fab746778984884581f&hash=24c043ba4094f21173bc246ee7f8b067`
    );

    setCharacter(res.data.data.results);
  };

  useEffect(() => {
    descripcionId();
  }, []);

  console.log(characterId);

  return (
    <main className={style.personage_body}>
      {!character ? (
        <span class={style.loader}></span>
      ) : (
        <div className={style.card}>
          <img
            src={
              character[0].thumbnail.path +
              "." +
              character[0].thumbnail.extension
            }
            alt=""
          />
          <button
            className={style.button}
            onClick={() => {
              setCharacter({});
              setDescription(false);
            }}
          >
            X
          </button>
          <div className={style.card_content}>
            <h2>{character[0].name}</h2>
            <div className={style.personage_hover}>
              <h3>
                Comics: <span>{character[0].comics.available}</span>
              </h3>
              <h3>
                Series: <span>{character[0].series.available}</span>
              </h3>
              <h3>
                Stories: <span>{character[0].stories.available}</span>
              </h3>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Personaje;
