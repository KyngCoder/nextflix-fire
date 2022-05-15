import React, { useState, useEffect } from "react";
import axios from "axios";

import Movie from "./Movie";
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
const Rows = ({ title, fetchURL, id }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => setMovies(response.data.results));
  }, [fetchURL]);

  const next = () => {
    let slider = document.getElementById('slider' + id);
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  const previous = () => {
    let slider = document.getElementById('slider' + id);
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
      <MdChevronLeft
      onClick={previous}
       className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
       />
        <div
          id={"slider" + id}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
       
          {movies.map((movie, id) => {
            return <Movie key={id} movie={movie} />;
          })}
        </div>
        <MdChevronRight
        onClick={next}
        className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
         />
      </div>
    </div>
  );
};

export default Rows;
