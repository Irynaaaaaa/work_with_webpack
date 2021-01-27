
import getFilm from "./getFilm"
import renderCharacters from "./renderCharacters"
import getPlanet from "./getPlanet"
import renderPlanets from "./renderPlanets"
import "./style.css";
import "./index.html";
///
let page = 1;

const button = document.getElementById("but")
button.addEventListener('click', () => {
    document.querySelector('.container').innerHTML = '';
    const val = document.getElementById('input').value;
    getFilm(val).then(renderCharacters)})

    

getPlanet().then(planets => console.log("planets : ", planets))


getPlanet().then(renderPlanets)


/////////////////////
rightButton.addEventListener('click', () => {
    document.querySelector('.containerOfPlanets').innerHTML = '';
    if(page == 6)
    {
        page = 0;
    }
    page = page + 1;
    getPlanet(page).then(renderPlanets).page

})


/////////////////////////
lefttButton.addEventListener('click', () => {
    document.querySelector('.containerOfPlanets').innerHTML = '';
    if(page == 1)
    {
        page = 7;
    }
    page = page - 1;
    getPlanet(page).then(renderPlanets).page

})