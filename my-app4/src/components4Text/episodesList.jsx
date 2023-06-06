import React from "react";
import { episodes } from "../fakeStorage/episodes"; // добавим импорт

const EpisodesList = () => {
    return (
        <div className="container">
            <div className="row">
                {/* Добавь вывод эпизодов */}
                {episodes.map((episode) => (
                    <div
                        key={episode.id}
                        style={{ heigth: "200px" }}
                        className="col-3"
                    >
                        {episode.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EpisodesList;
