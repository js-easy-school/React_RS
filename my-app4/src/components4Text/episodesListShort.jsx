import React, { useState } from "react";
import { episodes } from "../fakeStorage/episodes";
import Episode from "./episode"; //Импорт компонента
import Pagination from "./pagination";
import { paginate } from "./utils/paginate";

const EpisodesListShort = () => {
    const count = episodes.length; // количество записей
    const pageSize = 8; // количество записей на странице, которое хотим выводить

    const [currentPage, setCurrentPage] = useState(1);

    // Принимаем pageIndex
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
        console.log(pageIndex);
    };

    const pageEpisodes = paginate(episodes, currentPage, pageSize);

    return (
        <div className="container">
            <div className="row">
                {pageEpisodes.map((episode) => (
                    <Episode key={episode.id} {...episode} />
                ))}
            </div>
            <div className="row">
                <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />{" "}
                {/*Тут вызов компонента пагинации */}
            </div>
        </div>
    );
};

export default EpisodesListShort;
