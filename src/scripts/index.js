import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';
import { API_KEY } from './config.js';
import queryString from "query-string";
import Axios from "axios";
import { loadMovies } from './overviewPage';
import { loadMovieDetail } from './detailPage';


const parsed = queryString.parse(location.search);
var movieId;

// Switchen tussen overview en detail nog verder afwerken!
if (parsed.id) {
    movieId = parsed.id;
    loadMovieDetail(movieId);
} else {
    loadMovies();
};
