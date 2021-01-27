import  getCharacter from "./getCharacter";

async function renderCharacters(characters)
    {   
        const container = document.querySelector('.container');
        characters.forEach(element => {
            let cards = document.createElement('div'); 
            cards.classList.add('user'); 
            getCharacter(element).then(value => {
                cards.innerHTML = 
                `<h4>${value.data.name}</h4>
                 <h5>${value.data.birth_year}</h5>
                 <h5>${value.data.gender}</h5>`       
               

            })
            container.append(cards);
        });
        
    }

    export default renderCharacters;
