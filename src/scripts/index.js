import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';
import { loadMovies } from './wesly';
import { loadMovieDetail } from './thomas';
import { API_KEY } from './config.js';
import queryString from "query-string";
import Axios from "axios";
import { get } from 'https';


const parsed = queryString.parse(location.search);




if (parsed.movie) {
    loadMovieDetail(parsed.movie);
    
} else {
    loadMovies(); 
}