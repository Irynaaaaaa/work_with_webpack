const BASE = 'https://swapi.dev/api/';

 async function getFilm(el)
{
    const res = await axios.get( BASE + `films/${el}/`)
    return res.data.characters;
}

export default getFilm;