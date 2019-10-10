import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';
import { loadMovies } from './wesly';
import { loadMovieDetail } from './thomas';
import { API_KEY } from './config.js';
import queryString from "query-string";
import Axios from "axios";


const parsed = queryString.parse(location.search);

// Switchen tussen overview en detail nog verder afwerken!
if (parsed.movie) {
    const stringified = queryString.stringify(parsed);
    console.log(stringified);
    // var movieId = 
    loadMovieDetail();
} else {
    loadMovies();
}