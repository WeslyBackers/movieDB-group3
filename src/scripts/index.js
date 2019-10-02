import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';
import { loadMovies } from './wesly';
import { loadMovieDetail } from './thomas';
import { API_KEY } from './config.js';
import queryString from "query-string";
import Axios from "axios";


const parsed = queryString.parse(location.search);

<<<<<<< HEAD
if (parsed.movie) {
    loadMovieDetail();
} else {
    loadMovies();
=======



if (parsed.movie) {
    loadMovieDetail(parsed.movie);
    
} else {
    loadMovies(); 
>>>>>>> 03ffc2a9dc8af0d618c8e61aebe41b9c9913feb4
}