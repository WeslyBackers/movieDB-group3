import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';
import { initMark } from './mark';
import { initThomas } from './thomas';
import { API_KEY } from './config';

// Geeft je een nummer tussen 0 en 1 terug
const number = Math.random(); 
if (number >= 0.5) {
    initThomas();
} else {
    initMark();

}


