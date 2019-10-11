const naam = "Thomas";
import Axios from "axios";
import { API_KEY } from "./config.js";

export function loadMovieDetail(movieId) {
    console.log('login: ' + naam);


    // Divs vastpakken
    var movieDetails = document.querySelector(".movieDetails");
    var overviewPage = document.querySelector(".overviewPage");

     // Overschakelen naar Overview pagina
     movieDetails.setAttribute("style", "display: block");
     overviewPage.setAttribute("style", "display: none"); 

     var movieData;

    //Ophalen van de data en in 'response' steken met Axios-functies
    Axios.get('https://api.themoviedb.org/3/movie/'+ movieId + '?api_key=' + API_KEY)
        .then(function(response) {
            
            movieData = response.data;
            //als check: data printen in console(enkel de filmdata-lijst = response.data.results)
            console.log(movieData);
        
            // Functie aanroepen om data te printen in html
            writeMovieDetail(movieData);

        });

}; // einde loadMovieDetail function


function writeMovieDetail(movieData) {
    //4.a console print data als check of deze opgenomen wordt in de functie
    console.log(movieData);

    // var mvTitle = document.getElementById("mvTitle");
    // var mvScore = document.getElementById("mvScore");
    // var mvReleaseDate = document.getElementById("mvReleaseDate");
    // var mvSynopsis = document.getElementById("mvSynopsis");
    // var mvProductionCompanies = document.getElementById("mvProductionCompanies");

    // mvTitle.innerHTML = movieData.title;
    // mvScore.innerHTML = movieData.vote_average;
    // mvReleaseDate.innerHTML = movieData.release_date;
    // mvSynopsis.innerHTML = movieData.overview;
    // mvProductionCompanies.innerHTML = movieData.production_companies;

    var detailPage = document.querySelector(".detailPage");
    var movieDetails = `
        <div class="jumbotron" id="jumboDetail">
            <h3 id="mvTitle">${movieData.title}</h3>
        </div>    
        <div class="container bg-secondary" id="movieDetailsBody>
            <p id="mvScore">${movieData.vote_average}</p>
            <p id="mvReleaseDate">${movieData.release_date}</p>
            <p id="mvSynopsis">${movieData.overview}</p>
            <ul id="mvProductionCompanies"></ul>
            <a class="back btn" href="index.html">Back to overview</a>
        </div>
    `;

    // Render detais of movie on page
    detailPage.innerHTML = movieDetails;

    // Render production companies in a list
    var productionCompanies = movieData.production_companies;
    productionCompanies.forEach(companyDetails => {
        var productionCompanyList = document.getElementById("mvProductionCompanies");
        var company = document.createElement('li');
        company.innerHTML = companyDetails.name;
        productionCompanyList.appendChild(company);
    });

    // Add background image to jumbotron
    var jumboDetail = document.querySelector("#jumboDetail");

    jumboDetail.style.backgroundImage = "url('https://image.tmdb.org/t/p/w1280" + movieData.backdrop_path + "')";

};