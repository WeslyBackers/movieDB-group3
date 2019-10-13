const naam = "Thomas";
import Axios from "axios";
import { API_KEY } from "./config.js";

export function loadMovieDetail(movieId) {
    //  console.log('login: ' + naam);


    // Divs vastpakken
    var movieDetails = document.querySelector(".movieDetails");
    var overviewPage = document.querySelector(".overviewPage");

    // Overschakelen naar Overview pagina
    movieDetails.setAttribute("style", "display: block");
    overviewPage.setAttribute("style", "display: none");

    var movieData;

    //Ophalen van de data en in 'response' steken met Axios-functies
    Axios.get('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=' + API_KEY)
        .then(function(response) {

            movieData = response.data;
            //als check: data printen in console(enkel de filmdata-lijst = response.data.results)
            //console.log(movieData);

            // Functie aanroepen om data te printen in html
            writeMovieDetail(movieData);

        });

}; // einde loadMovieDetail function


function writeMovieDetail(movieData) {
    //4.a console print data als check of deze opgenomen wordt in de functie
    console.log(movieData);

    var detailPage = document.querySelector(".detailPage");
    var movieDetails = `
        <div class="jumbotron" id="jumboDetail">
            <h3 class="text-white mvTitle p-2" id="mvTitle"><b>${movieData.title}</b></h3>
<<<<<<< HEAD:src/scripts/thomas.js
        </div>  

        <div class="d-flex col-12 mvInfo text-white rounded p-4 mvInfo border justify-content-between" id="movieDetailsBody">
            <div class="d-flex row col-6">
                <div class="flex">        
                    <p id="mvScore"><b>Rating:</b><br> ${movieData.vote_average}</p>
                    <p id="mvReleaseDate"><b>Release Date:</b><br> ${movieData.release_date}</p>
                    <p id="mvSynopsis"><b>Description:</b> <br>${movieData.overview}</p>
                    <p id="mvProductionCompaniesTitle"><b>Production Companies:</b></p>
                    <ul id="mvProductionCompanies"></ul>
                </div>
                <div class="flex">
                    <a class="back btn btn-light" href="index.html">Back to overview</a>
                </div>        
            </div>
            <div class="d-flex col-5 mvPoster" style="background-image: url('https://image.tmdb.org/t/p/w342${movieData.poster_path}');"> 
            </div>

        </div>
    `;
=======
        </div>    
        <div class="container mvInfo text-white rounded p-2 mvInfo border" id="movieDetailsBody>
            <div class="posterDiv">
                <img src="https://image.tmdb.org/t/p/w300/${movieData.poster_path}">
            </div> <!-- End of posterDiv -->
            <div class="infoDiv">
                <p id="mvScore"><b>Rating:</b><br> ${movieData.vote_average}</p>
                <p id="mvReleaseDate"><b>Release Date:</b><br> ${movieData.release_date}</p>
                <p id="mvSynopsis"><b>Description:</b> <br>${movieData.overview}</p>
                <p id="mvProductionCompaniesTitle"><b>Production Companies:</b></p>
                <ul id="mvProductionCompanies"></ul>
                <div class="d-flex justify-content-end">
                    <a class="back btn btn-light p-1" href="index.html">Back to overview</a>
                </div><!-- End of button div -->
            </div><!-- End of info div -->
        </div><!--End of movieDetailsBody div-->
    `; // end of movieDetails variable
>>>>>>> f26f843cfa4a70cb4981297c69862d0e85b74506:src/scripts/detailPage.js

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