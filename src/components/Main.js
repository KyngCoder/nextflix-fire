import React,{useState,useEffect} from 'react'
import 'axios' from 'axios'
import request from '../env'

const Main = () => {
    const [movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)];
  
    useEffect(() => {
      axios.get(requests.requestPopular).then((response) => {
        setMovies(response.data.results);
      });
    }, []);
   console.log(movie);
  return (
    <div>Main</div>
  )
}

export default Main