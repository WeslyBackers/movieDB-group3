import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';
import { loadMovies } from './wesly';
import { loadMovieDetail } from './thomas';
import { API_KEY } from './config.js';
import queryString from "query-string";
import Axios from "axios";
import { get } from 'https';


const parsed = queryString.parse(location.search);

// Divs vastpakken
var movieDetails = document.querySelector('.movieDetails');
var overviewPage = document.querySelector('.overviewPage');


if (parsed.movie) {
    loadMovieDetail();
    console.log(parsed.movie);
    
    // Overschakelen naar Details pagina
    movieDetails.setAttribute("hidden", false);
    overviewPage.setAttribute("hidden", true);  
} else {
    loadMovies();

     // Overschakelen naar Overview pagina
     movieDetails.setAttribute("hidden", true);
     overviewPage.setAttribute("hidden", false);  
}