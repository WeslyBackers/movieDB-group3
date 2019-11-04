//1. declaratie loginnaam
const naam = "Wesly";
var genres;


//2. import van globale functies en variabelen die nodig zijn binnen 'wesly.js':
import { API_KEY } from "./config.js";
import Axios from "axios";

//3. uitvoeren van api-data themoviedb.org '20 populairste films'
//3.a exporteren van funtie voor gebruik in andere index.js
export function loadMovies(page) {
   //console.log("login: " + naam);
   
    //3.b ophalen van de data en in 'response' steken met Axios-functies
    Axios.get('https://api.themoviedb.org/3/discover/movie?api_key='+API_KEY+'&sort_by=popularity.desc&page='+page)
        .then(function(response) {

            //3b-1: als check: data printen in console(enkel de filmdata-lijst = response.data.results)
            // console.log(response.data.results);

            //3b-2: uitvoeren van de functie writeMovies to 'Overview' met de data van de filmdata-lijst =response.data.results)
            writeMovies(response.data.results,genres);
            setNavigation(page);
        });
}

export function getGenres(){

    Axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key='+ API_KEY)
    .then(function(response){
        genres = response.data.genres;
       // console.log(genres);
    });

}


function setNavigation(page){
    console.log(page);
    var nextpage = parseInt(page) + 1;
    var previouspage = parseInt(page) - 1;

    document.getElementById("previous").setAttribute("href","index.html?page="+previouspage);
    document.getElementById("next").setAttribute("href","index.html?page="+nextpage);
    
    if (page > 1){

        document.getElementById("page-previous").classList.remove("disabled");;
    }

    }

//4. plaatsen van data in html
function writeMovies(data,genres) {
    //4.a console print data als check of deze opgenomen wordt in de functie
    //console.log(genres);

    if (data && genres){
        
        console.log(genres);
    //4.b Loop door de filmlijst om deze in html te droppen met forEach ipv for-loop
        data.forEach(el => {
        //console.log(el);
    
        var genresFilm = el.genre_ids;


        var badges = document.createElement('div');
        badges.setAttribute('class','row col-12 d-flex flex-fill ');

        genresFilm.forEach(gnr => {
            

            for (var x = 0; x < genres.length; x++){
                
                if (gnr === parseInt(genres[x].id)){
                  //  console.log(genres[x].name);
                  
                    var badge = document.createElement('span');
                    badge.setAttribute('class','badge badge-secondary m-1');
                    badge.innerText = genres[x].name;
                    badges.appendChild(badge);
                }
            }
        });

        //console.log(genresFilm);


        //4.b-1: aanmaken Bootstrap jumbotron 
        var jumbo = document.createElement('div');

        //4.b-2: attributen instellen voor opmaak en click-relaties
        jumbo.setAttribute('class', 'jumbotron p-0 m-2');
        jumbo.setAttribute('id', el.id);

        //4.b-3 opmaak datastring voor in jumbotron
        var movieData = `            
            <div class="mvInfo card">
                <img src=https://image.tmdb.org/t/p/w300/${el.poster_path}>
                <div class="card-body p-2">
                    <h3 class="card-title">${el.title}</h3>
                    
                    <p class="card-text">Score: <i class="fas fa-star"></i>${el.vote_average}</p>
                    <p class="card-text">Release: ${el.release_date}</p>
                    <div class= col-12" id="genres">${badges.innerHTML}<div>      
                    <br>
                </div>
                <div class="col-12 d-flex align-self-end">
                <a class="readmore btn" href="index.html?id=${el.id}">Read more</a>
                </div>
            </div>
        `;

        //4.b-4: datastring in jumbotron
        jumbo.innerHTML = movieData;
        jumbo.style.backgroundImage = "url('https://image.tmdb.org/t/p/w1280" + el.backdrop_path + "')";
        jumbo.style.backgroundSize = "cover";
        jumbo.style.backgroundPosition = "center";

        //4.b-5:jumbotron in HTML
        document.getElementById('p01').appendChild(jumbo);
    

    });
}
}
