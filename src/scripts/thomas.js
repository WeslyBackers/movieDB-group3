const naam = "Thomas";

export function loadMovieDetail(id) {
    console.log('login: ' + naam);

    // Divs vastpakken
    var movieDetails = document.querySelector(".movieDetails");
    var overviewPage = document.querySelector(".overviewPage");

     // Overschakelen naar Overview pagina
     movieDetails.setAttribute("hidden", false);
     overviewPage.setAttribute("hidden", true); 

    console.log(id);


}
