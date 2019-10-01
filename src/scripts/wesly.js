//1. declaratie loginnaam
const naam = "Wesly";

//2. import van globale functies en variabelen die nodig zijn binnen 'wesly.js':
import { API_KEY } from "./config.js";
import Axios from "axios";

//3. uitvoeren van api-data themoviedb.org '20 populairste films'
//3.a exporteren van funtie voor gebruik in andere index.js
export function initWesly() {
    console.log("login: " + naam);

    //3.b ophalen van de data en in 'response' steken met Axios-functies
    Axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=' + API_KEY)
        .then(function(response) {

            //3b-1: als check: data printen in console(enkel de filmdata-lijst = response.data.results)
            console.log(response.data.results);

            //3b-2: uitvoeren van de functie writeMovies to 'Overview' met de data van de filmdata-lijst =response.data.results)
            writeMovies(response.data.results);
        });
}

//4. plaatsen van data in html
function writeMovies(data) {
    //4.a console print data als check of deze opgenomen wordt in de functie
    console.log(data);

    //4.b Loop door de filmlijst om deze in html te droppen met forEach ipv for-loop

    data.forEach(el => {
        //console.log(el);

        //4.b-1: aanmaken Bootstrap jumbotron 
        var jumbo = document.createElement('div');

        //4.b-2: attributen instellen voor opmaak en click-relaties
        jumbo.setAttribute('class', 'jumbotron');
        jumbo.setAttribute('class', 'col-6 pt-5');
        jumbo.setAttribute('id', el.id);
        jumbo.setAttribute('onclick', getDetails());

        //4.b-3 opmaak datastring voor in jumbotron
        var movieData =
            '<h3>' + el.title + '</h3><hr class="border-white">' +
            '<p>score: ' + el.vote_average + '/10</p>' +
            '<p>Release: ' + el.release_date + '</p>';

        //4.b-4: datastring in jumbotron
        jumbo.innerHTML = movieData;
        jumbo.style.backgroundImage = "url('https://image.tmdb.org/t/p/w1280" + el.backdrop_path + "')";
        jumbo.style.backgroundSize = "cover";
        //4.b-5:jumbotron in HTML
        document.getElementById('p01').appendChild(jumbo);

    });
}

function getDetails() {

}