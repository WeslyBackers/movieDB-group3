import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';
import { loadMovies } from './wesly';
import { loadMovieDetail } from './thomas';
import { API_KEY } from './config.js';
import queryString from "query-string";
import Axios from "axios";
import { get } from 'https';


const parsed = queryString.parse(location.search);

var movieDetails = document.querySelector('.movieDetails');
var overviewPage = document.querySelector('.overviewPage');

if (parsed.movieId) {
    loadMovieDetail();
    movieDetails.setAttribute("hidden", false);
    overviewPage.setAttribute("hidden", true);    
} else {
    loadMovies();
    movieDetails.setAttribute("hidden", true);
    overviewPage.setAttribute("hidden", false);
}