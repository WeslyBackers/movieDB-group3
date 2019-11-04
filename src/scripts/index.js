import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';
import { API_KEY } from './config.js';
import queryString from "query-string";
import Axios from "axios";
import { loadMovies } from './overviewPage';
import { loadMovieDetail } from './detailPage';
import { getGenres } from './overviewPage';


const parsed = queryString.parse(location.search);
//location.assign("index.html?page=1");
//console.log(parsed.page);
// Switchen tussen overview en detail nog verder afwerken!

if (parsed.id) {
    //movieId = parsed.id;
    loadMovieDetail(parsed.id);
} 

else {
    getGenres();
    if (parsed.page){
    loadMovies(parsed.page);
    }
    else{
        loadMovies(1);
    }
}
