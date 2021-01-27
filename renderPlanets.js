import "./index.html"
import "./style.css"
const rightButton = document.createElement('button')
const lefttButton = document.createElement('button')
const containerOfPlanets = document.createElement('div');
containerOfPlanets.className = "containerOfPlanets"
async function renderPlanets(results)
{
    const container = document.querySelector('.container');
    const buttonContainer = document.createElement('div');

    results.forEach(element =>{
        const planets = document.createElement('div');
        planets.classList.add('planet'); 
        planets.innerHTML =  
        `<h4>${element.name}</h4>`;

        containerOfPlanets.appendChild(planets)
    })
    rightButton.id = "right";
    lefttButton.id = "left";
    rightButton.innerHTML = '<img src="./icons/next.png" width = 30px />';
    lefttButton.innerHTML = '<img src="./icons/back.png" width = 30px />';
    buttonContainer.append(lefttButton);
    buttonContainer.append(rightButton);
    containerOfPlanets.appendChild(buttonContainer) 
    container.append(containerOfPlanets)

}

export default renderPlanets;