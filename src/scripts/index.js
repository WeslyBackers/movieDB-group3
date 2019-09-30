import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';
import { initMark } from './mark';
import { initThomas } from './thomas';
import { API_KEY } from './config';
import queryString from "query-string";

const parsed = queryString.parse(location.search);

// Geeft je een nummer tussen 0 en 1 terug
const number = Math.random(); 
if (parsed.movieId) {
    initThomas();
} else {
    initMark();
}


