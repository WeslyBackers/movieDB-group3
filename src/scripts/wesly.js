//1. declaratie loginnaam
const naam = "Wesly";

//2. import van globale functies en variabelen die nodig zijn binnen 'wesly.js':
import { API_KEY } from "./config.js";
import Axios from "axios";

//3. uitvoeren van api-data themoviedb.org '20 populairste films'
//3.a exporteren van funtie voor gebruik in andere index.js
export function loadMovies() {
    console.log("login: " + naam);

    //3.b ophalen van de data en in 'response' steken met Axios-functies
    Axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=' + API_KEY)
        .then(function(response) {
           
            //3b-1: als check: data printen in console(enkel de filmdata-lijst = response.data.results)
            console.log(response.data.results);
         
            // Add data to local storage to re-use later
            localStorage.setItem("movieList", JSON.stringify(response));

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
        jumbo.setAttribute('class', 'col-lg-5 col-sm-12 p-5 m-2 mb-1');
        jumbo.setAttribute('id', el.id);

        //4.b-3 opmaak datastring voor in jumbotron
        var movieData =
        '<div class="mvInfo p-3"><h3>' + el.title + '</h3><hr class="border-white">' +
        '<p>score: ' + el.vote_average + '/10</p>' +
        '<p>Release: ' + el.release_date + '</p>' +
        '<button class="readmore btn" id="' + el.id + '" onclick="getDetails(' + el.id +')">Read more</button></div>';

        //4.b-4: datastring in jumbotron
        jumbo.innerHTML = movieData;
        jumbo.style.backgroundImage = "url('https://image.tmdb.org/t/p/w1280" + el.backdrop_path + "')";
        jumbo.style.backgroundSize = "cover";
        //4.b-5:jumbotron in HTML
        document.getElementById('p01').appendChild(jumbo);

    });
}

// Functie om filmdetails op te roepen
function getDetails(clickedMovieId) {
    // Test of id meegegeven is 
    console.log("De geklikte film heeft het id " + clickedMovieId);

    // MovieList uit local storage oproepen
    var movieListData = JSON.parse(localStorage.getItem("movieList"));
    console.log(movieListData);



};