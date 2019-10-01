import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';
import { initWesly } from './wesly';
import { initThomas } from './thomas';
import { API_KEY } from './config.js';
import queryString from "query-string";
import Axios from "axios";


const parsed = queryString.parse(location.search);

if (parsed.movieId) {
    initThomas();
} else {
    initWesly();
}