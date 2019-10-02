const naam = "Thomas";

export function loadMovieDetail() {
    console.log('login: ' + naam);

    var movieDetails = document.querySelector('.movieDetails');
    var overviewPage = document.querySelector('.overviewPage');

    movieDetails.setAttribute("hidden", false);
    overviewPage.setAttribute("hidden", true);  
}